import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {Prompt} from 'react-router-dom';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && (!previousValue ? value : (value > previousValue ? value : previousValue));

const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo nombre es requerido";
    }

    if(!values.dni){
        error.dni = "El capo DNI es requerido";
    }

    return error;
}



/*
const isRequired = value => (
    !value && "Este campo es requerido"
);
*/
class CustomerEdit extends Component {

    componentDidMount() {
        if(this.txt){
            this.txt.focus();
        }
    }

    renderField = ({ input, meta, type, label, name, withFocus }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} 
                    type={!type ? "text" : type}
                    ref={ withFocus && (txt => this.txt = txt)}/>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );
    

    render() {
        const {handleSubmit, submitting, onBack, pristine, subsmitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        name='name' 
                        component={this.renderField}
                        type='text'
                        label='Nombre: '
                        parse={toUpper} //justo antes de guardar en el servidor
                        format={toLower}  //justo antes de mostrar en el form al usuario
                        />
                    <Field 
                        name='dni'
                        component={this.renderField}
                        type='text'
                        label='DNI: ' />
                    <Field 
                        name='age'
                        component={this.renderField}
                        type='number'
                        validate={[isNumber]}
                        label="Edad: "
                        parse={toNumber} 
                        normalize={onlyGrow} //se ejecuta luego de q se ejecute parse()
                        />
                    <CustomersActions>
                        <button type='submit' disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type='button' disabled={submitting} onClick={onBack}>
                            Cancelar
                        </button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !subsmitSucceeded}
                        message="Se perderán los datos si continua."
                    />
                </form>
            </div>
        )
    }
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};


const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

/*export default connect (
    (state, props) => (
        { initialValues: props }
    ))(CustomerEditForm);
*/
//export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);