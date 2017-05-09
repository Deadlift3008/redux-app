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


export function UpdatePage(){
    return {
        type: UPDATE_PAGE,
        payload: true
    }


}

export function setRegisterModal(value){
    return {
        type: REGISTER_MODAL,
        payload: value
    }

}

export function addItem(item){
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export function removeItem(item){
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}

export function styleMainContainer(styles){
    return{
        type: STYLE_MAIN_CONTAINER,
        payload: styles
    }
}

export function stylePage(config){
    return{
        type: STYLE_PAGE,
        payload: config
    }
}

export function resetStyles(config){
    return{
        type: RESET_STYLES,
        payload: config
    }
}

