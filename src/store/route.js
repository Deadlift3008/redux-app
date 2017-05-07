import {ROUTES} from '../constants/pages';

export function Route(state = {}){
    //clear
    state.currentPageId = null;
    state.currentPage = null;

    //find route
    ROUTES.forEach(function(item,i,arr){
        if(window.location.hash === item.hash){
            state.currentPageId = item.page_id;
            state.currentPage = item.component;
        }
    });

    if(!state.currentPageId || window.location.hash === ""){
        // set main
        state.currentPageId = ROUTES[0].page_id;
        state.currentPage = ROUTES[0].component;
    }

    return state;
}