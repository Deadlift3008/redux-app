import {createStore,applyMiddleware} from 'redux';
import MainReducer from '../reducers/main_reducer';
import thunk from 'redux-thunk';

import {Route} from './route';

export default function configureStore(initialState = {}){

    initialState = Route();
    const store  = createStore(
        MainReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}



