import {Route} from '../store/route';

export default function MainReducer(state = intialState, action){
    switch(action.type){
        case "update_page":
            let copyState = JSON.parse(JSON.stringify(state));
            return Route(copyState);
        case "register_modal":
            return {...state, open_modal: action.payload};
        default:
            return state;
    }

}
