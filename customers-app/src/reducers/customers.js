import { handleActions } from 'redux-actions'; //utilidad q permite manejar los reducers
import { FETCH_CUSTOMERS } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});
