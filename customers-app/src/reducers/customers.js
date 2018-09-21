import { handleActions } from 'redux-actions'; //utilidad q permite manejar los reducers
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

export const customers = handleActions({
    //[FETCH_CUSTOMERS]: state => state, //state => state es una funcion de transfomacion que por el momento no realiza nada
     //aqui mapeo la accion FETCH_CUSTOMERS con el array q quiero mostrar, en este caso es el array
     // q viene en el action con los datos de los customers
     //STATE siempre es el array de los clientes
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload], // aqui agrego el nuevo cliente a la memoria para ir al srv a cada rato
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload;
        const {id} = customerPayload;

        const customers = state;
        const initialValue = [];
        const newCustomers = customers.reduce((acc, customer) => {
            if(customer.id === id){
                return [...acc, customerPayload] //aqui agrego el customer q viene atualizado
            }else{
                return [...acc, customer] //aqui solo voy acumulando customers
            }
        }, initialValue);
        
        return newCustomers; //retorno los customers pero con el customer actualizado debidamente agregado
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []); //[] este es el valor por defecto, en este caso es un array vacio
