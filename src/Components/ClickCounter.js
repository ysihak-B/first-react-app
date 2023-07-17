import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
    render() { 
        const {name, count, increamentCount} = this.props
        return ( 
            <button onClick={increamentCount}>
                {name} Clicked {count} times 
            </button>
         );
    }
}
 
export default WithCounter(ClickCounter,5);