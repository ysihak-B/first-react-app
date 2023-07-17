import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    Increament(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        this.setState({
            count : this.state.count + 1,  
        }, ()=>{console.log('Callback value :',this.state.count)})
    }
 
    Reset(){
        this.setState({
            count : 0
        })
    }

    render(){
        return(
            <div>
                <p>count = {this.state.count}</p>
                <button onClick={()=> this.Increament()}>add one</button>
                <button onClick={()=>this.Reset()}>reset</button>
            </div>
        )
    }
}

export default Counter