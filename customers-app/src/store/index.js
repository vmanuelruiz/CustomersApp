import { createStore, compose } from 'redux';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //parametros para usar plugin de REDUX en el navegador

//const reducers = state => state;

export const store = createStore(reducers, {}, composeEnhancers());
