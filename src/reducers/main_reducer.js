import {Route} from '../store/route';

export default function MainReducer(state = intialState, action){
    switch(action.type){
        case "update_page":
            return Route(state);
        default:
            return state;
    }

}
