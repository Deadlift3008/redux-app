export default function MainReducer(state = intialState, action){
    switch(action.type){
        case "test":
            return { ...state, data: action.payload };
        case "test2":
            return { ...state, data: action.payload};
        default:
            return state;
    }

}
