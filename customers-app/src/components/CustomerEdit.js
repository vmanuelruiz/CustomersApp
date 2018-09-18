import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <h3>Mombre: {name} / DNI: {dni} / Edad: {age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);