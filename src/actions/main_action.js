export function testAction(){
    return (dispatch) => {
        dispatch({
            type: "test",
            payload: "its worked"
        })
    }
}