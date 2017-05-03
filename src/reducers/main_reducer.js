import {Route} from '../store/route';

export default function MainReducer(state = intialState, action){
    switch(action.type){
        case "update_page":
            return Route(JSON.parse(JSON.stringify(state)));
        default:
            return state;
    }

}
