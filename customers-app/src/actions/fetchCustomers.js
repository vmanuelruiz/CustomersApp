import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Perez.",
        "age": 37
    },
    {
        "dni": "30000000",
        "name": "Otro",
        "age": 35
    },
    {
        "dni": "33000000",
        "name": "Luis Martines",
        "age": 32
    }
];

//export const fetchCustomers = ({type: FETCH_CUSTOMERS, payload: null});
//Ahora usando la funcion createAction de redux-action:
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers); //NO LE PASO PAYLOAD, xq se q tiene null y es por gusto
//el 2do parametro de la funcion action recibe una FUNCION PAYLOAD CREATOR, x eso rimero ponemos ().

