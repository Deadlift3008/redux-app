import {Route} from '../store/route';

export default function MainReducer(state = intialState, action){
    switch(action.type){
        case "update_page":
            let copyState = JSON.parse(JSON.stringify(state));
            return Route(copyState);
        case "register_modal":
            return {...state, open_modal: action.payload};
        case "add_item":
            copyState = JSON.parse(JSON.stringify(state));

            //set id for items
            if(!copyState.list_items){
                copyState.list_items = [];
                action.payload.id = 1;
            }else{
                action.payload.id = copyState.list_items.length + 1;
            }

            copyState.list_items.push(action.payload);
            return copyState;
        case "remove_item":
            copyState = JSON.parse(JSON.stringify(state));
            let indexDelete;
            //find delete index in array
            //id is not necessarily equal to array index
            copyState.list_items.forEach(function(item,i,arr){
                if(item.id == action.payload.id){
                    indexDelete = i;
                }
            });

            copyState.list_items.splice(indexDelete,1);
            return copyState;
        default:
            return state;
    }

}
