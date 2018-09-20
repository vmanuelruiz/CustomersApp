import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const MyField = ({ input, meta}) => (
    <div>
        <input {...input} type="text"/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const isRequired = value => (
    !value && "Este campo es requerido"
);

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <Field 
                        name='name' 
                        component={MyField}
                        type='text'
                        validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI: </label>
                    <Field 
                        name='dni'
                        component={MyField}
                        type='text'
                        validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad: </label>
                    <Field name='age' component='input' type='number'></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};


const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit);

/*export default connect (
    (state, props) => (
        { initialValues: props }
    ))(CustomerEditForm);
*/
//export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);