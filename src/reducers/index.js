import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './ItemEditing';

const appReducers = combineReducers({
    products,
    itemEditing

});
export default appReducers;