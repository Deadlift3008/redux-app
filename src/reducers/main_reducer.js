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
        case "style_main_container":
            copyState = JSON.parse(JSON.stringify(state));
            if(copyState.styleMain){
                for(var i in action.payload){
                    copyState.styleMain[i] = action.payload[i];
                    //Particular case
                    if(copyState.styleMain[i] == "#"){
                        delete copyState.styleMain[i]
                    }
                }
            }else{
                copyState.styleMain = action.payload;
            }

            return copyState;
        case "style_page":
            copyState = JSON.parse(JSON.stringify(state));
            let page = action.payload.page;
            delete action.payload.page;
            if(copyState.stylePage && copyState.stylePage[page]){
                for(var i in action.payload){
                    copyState.stylePage[page] = action.payload[i];
                    if(copyState.stylePage[page] == "#"){
                        delete copyState.stylePage[page];
                    }
                }
            }else{
                copyState.stylePage = {};
                copyState.stylePage[page] = action.payload;
            }

            return copyState;
        case "reset_styles":
            copyState = JSON.parse(JSON.stringify(state));

            switch(action.payload.type){
                case "container":
                    copyState.styleMain = {};
                    break;
                case "main":
                    if(copyState.stylePage){
                        copyState.stylePage.main = {};
                    }
                    break;
                case "info":
                    if(copyState.stylePage){
                        copyState.stylePage.info = {};
                    }
                    break;
            }

            return copyState;
        default:
            return state;
    }

}
