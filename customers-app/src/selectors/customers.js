import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByDni = createSelector (
    (state, props) => state.customers.find( c => c.dni === props.dni),
    customer=> customer //aqui especifico que devuelvo un customer que recibira mapStateToProps de CustomerCOntainer
);