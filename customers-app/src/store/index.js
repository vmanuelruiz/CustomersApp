import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'; //retrasa la accion hasta q una promise se resuelva
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //parametros para usar plugin de REDUX en el navegador

//const reducers = state => state;

//NOTA IMPORTANTE:
// Los reducers modifican el store.. por eso siempre debemos crear REDUCERS
//funcion applyMiddleware aplica un middleware para interpretar lo que se le pase
//funcion promiseMiddleware de la libreria redux-promise se encarga de q primero se ejecuten las promises de las acciones y luego reanuda dichas acciones que dependen de una promise
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)));
