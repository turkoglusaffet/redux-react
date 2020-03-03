import {combineReducers} from 'redux';
import BasketReducer from './reducers/BasketReducer';
import CodesReducer from './reducers/CodesReducer';

const Reducers = combineReducers({
    basket: BasketReducer,
    codes: CodesReducer
});

export default Reducers;