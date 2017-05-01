export default function testReducer(state = intialState, action){
    switch(action.type){
        case "test":
            return {...state, type: action.payload };
            break;
        default:
            return state;
            break;
    }

}
