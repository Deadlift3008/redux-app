import {createStore} from 'redux';
import testReducer from '../reducers/main_reducer';

export default function configureStore(initialState){
    const store  = createStore(testReducer,initialState);
    return store;
}

