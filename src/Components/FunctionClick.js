import React from "react";

function FunctionClick(){
    function clickHandler(){
        console.log('Function button is Clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>
                Function
            </button>
        </div>
    )
}


export default FunctionClick
