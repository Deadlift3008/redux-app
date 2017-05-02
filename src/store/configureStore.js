import {createStore,applyMiddleware} from 'redux';
import MainReducer from '../reducers/main_reducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}){
    const store  = createStore(
        MainReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}

