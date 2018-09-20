import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && previousValue && (value > previousValue ? value : previousValue);

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

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

/*
const isRequired = value => (
    !value && "Este campo es requerido"
);
*/
const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name='name' 
                    component={MyField}
                    type='text'
                    label='Nombre: '
                    parse={toUpper} //justo antes de guardar en el servidor
                    format={toLower}  //justo antes de mostrar en el form al usuario
                    />
                <Field 
                    name='dni'
                    component={MyField}
                    type='text'
                    label='DNI: ' />
                <Field 
                    name='age'
                    component={MyField}
                    type='number'
                    validate={[isNumber]}
                    label="Edad: "
                    parse={toNumber} 
                    normalize={onlyGrow} //se ejecuta luego de q se ejecute parse()
                    />
                <CustomersActions>
                    <button type='submit' disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomersActions>
            </form>
        </div>
    );
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