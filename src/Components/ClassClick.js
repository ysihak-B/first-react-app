import { Component } from "react"


class ClassClick extends Component{
    clickHandler(){
        console.log('Class Button is Clicked')
    }
    render(){
        return(
            <button onClick={this.clickHandler}>
                Class
            </button>
        )
    }
}

export default ClassClick