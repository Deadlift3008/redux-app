export function UpdatePage(){
    return {
        type: "update_page",
        payload: true
    }


}

export function setRegisterModal(value){
    return {
        type: "register_modal",
        payload: value
    }

}

export function addItem(item){
    return{
        type: "add_item",
        payload: item
    }
}

export function removeItem(item){
    return{
        type: "remove_item",
        payload: item
    }
}

export function styleMainContainer(styles){
    return{
        type: "style_main_container",
        payload: styles
    }
}

export function stylePage(config){
    return{
        type: "style_page",
        payload: config
    }
}

export function resetStyles(config){
    return{
        type: "reset_styles",
        payload: config
    }
}

