export function testAction(){

    return (dispatch) => {
        dispatch({
            type: "test",
            payload: "wait please"
        });
        setTimeout(()=>{
            dispatch({
                type: "test",
                payload: "its worked"
            });
        },1000)
    }


}

export function testAction2(){
    return{
        type: "test2",
        payload: ""
    }

}