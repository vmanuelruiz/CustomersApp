import { handleActions } from 'redux-actions'; //utilidad q permite manejar los reducers
import { FETCH_CUSTOMERS, INSERT_CUSTOMER } from '../constants';

export const customers = handleActions({
    //[FETCH_CUSTOMERS]: state => state, //state => state es una funcion de transfomacion que por el momento no realiza nada
     //aqui mapeo la accion FETCH_CUSTOMERS con el array q quiero mostrar, en este caso es el array
     // q viene en el action con los datos de los customers
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload] // aqui agrego el nuevo cliente a la memoria para ir al srv a cada rato
}, []); //[] este es el valor por defecto, en este caso es un array vacio
