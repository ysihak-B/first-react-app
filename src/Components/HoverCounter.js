import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
    render() { 
        const {name, count, increamentCount} = this.props
        return ( 
            <h2 onMouseOver={increamentCount}>
                {name} Hovered {count} times 
            </h2>
         );
    }
}
 
export default WithCounter(HoverCounter,10);