import React, { Component } from "react";

// const Message = () => {
//     return <h1>wellcome visitor</h1>
// }

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Wellcome Visitor'
        }
    }

    ChangeState(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }


    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=> this.ChangeState()}>Subscribe</button>
            </div>
        )
    }
}

export default Message