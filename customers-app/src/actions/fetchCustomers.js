import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from './../api';
import { urlCustomers } from '../api/urls';


//export const fetchCustomers = ({type: FETCH_CUSTOMERS, payload: null});
//Ahora usando la funcion createAction de redux-action, que ejecuta los reducers(que a su vez modifican el state):
//export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers); //NO LE PASO PAYLOAD, xq se q tiene null y es por gusto
//el 2do parametro de la funcion action recibe una FUNCION PAYLOAD CREATOR, x eso rimero ponemos ().

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));

