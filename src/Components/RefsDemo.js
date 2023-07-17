import React, { createRef } from "react";

class RefsDemo extends React.Component{

    constructor(props){
        super(props)
        this.inputRef = createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

   render(){
    return(
        <div>
            <input type = 'text' ref = {this.inputRef} />
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
   }
}

export default RefsDemo