import {Route} from '../store/route';
import {
    UPDATE_PAGE,
    REGISTER_MODAL
} from "../constants/pages";

import {
    ADD_ITEM,
    REMOVE_ITEM
} from "../constants/items";

import {
    STYLE_MAIN_CONTAINER,
    STYLE_PAGE,
    RESET_STYLES
} from "../constants/customization";

export default function MainReducer(state = intialState, action){
    switch(action.type){
        case UPDATE_PAGE:
            let copyState = JSON.parse(JSON.stringify(state));
            return Route(copyState);
        case REGISTER_MODAL:
            return {...state, open_modal: action.payload};
        case ADD_ITEM:
            copyState = JSON.parse(JSON.stringify(state));
            return addItem(copyState,action);
        case REMOVE_ITEM:
            copyState = JSON.parse(JSON.stringify(state));
            return removeItem(copyState,action);
        case STYLE_MAIN_CONTAINER:
            copyState = JSON.parse(JSON.stringify(state));
            return styleMainContainer(copyState,action);
        case STYLE_PAGE:
            copyState = JSON.parse(JSON.stringify(state));
            return stylePage(copyState,action);
        case RESET_STYLES:
            copyState = JSON.parse(JSON.stringify(state));
            return resetStyles(copyState,action);
        default:
            return state;
    }

}


function addItem(state,action){
    //set id for items
    if(!state.list_items){
        state.list_items = [];
        action.payload.id = 1;
    }else{
        action.payload.id = state.list_items.length + 1;
    }

    state.list_items.push(action.payload);

    return state;
}

function removeItem(state,action){
    let indexDelete;
    //find delete index in array
    //id is not necessarily equal to array index
    state.list_items.forEach(function(item,i,arr){
        if(item.id == action.payload.id){
            indexDelete = i;
        }
    });

    state.list_items.splice(indexDelete,1);

    return state;
}

function styleMainContainer(state,action){
    if(state.styleMain){
        for(var i in action.payload){
            state.styleMain[i] = action.payload[i];
            //Particular case
            if(state.styleMain[i] == "#"){
                delete state.styleMain[i]
            }
        }
    }else{
        state.styleMain = action.payload;
    }

    return state;
}

function stylePage(state,action){
    let page = action.payload.page;
    delete action.payload.page;
    if(state.stylePage && state.stylePage[page]){
        for(var i in action.payload){
            state.stylePage[page] = action.payload[i];
            if(state.stylePage[page] == "#"){
                delete state.stylePage[page];
            }
        }
    }else{
        state.stylePage = {};
        state.stylePage[page] = action.payload;
    }

    return state;
}

function resetStyles(state,action){
    switch(action.payload.type){
        case "container":
            state.styleMain = {};
            break;
        case "main":
            if(state.stylePage){
                state.stylePage.main = {};
            }
            break;
        case "info":
            if(state.stylePage){
                state.stylePage.info = {};
            }
            break;
    }

    return state;
}
