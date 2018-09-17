import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

//export const fetchCustomers = ({type: FETCH_CUSTOMERS, payload: null});
//Ahora usando la funcion createAction de redux-action:
export const fetchCustomers = createAction(FETCH_CUSTOMERS); //NO LE PASO PAYLOAD, xq se q tiene null y es por gusto

