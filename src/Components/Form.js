import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            comments : '',
            topic : ''
        }
    }


    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert ( ` ${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit }>
                <div>
                    <lebel>Username</lebel>
                    <input type='text' value={this.state.username} 
                    onChange = {this.handleUsernameChange} ></input>
                </div>
                <div>
                    <lebel>Comments</lebel>
                    <textarea value={this.state.comments}
                    onChange = {this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <lebel>Topic</lebel>
                     <select value={this.state.topic} onChange = {this.handleTopicChange}>
                        <option value="default">None</option>
                        <option value="react">React</option> 
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                     </select>
                </div>
                <button value='submit'>submit</button>
            </form>
        )
    }
}

export default Form