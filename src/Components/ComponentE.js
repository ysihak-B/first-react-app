import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {

    // this method can not work with functional components
    // and when there is multiple contexts sp using UserConsumer is recommended
    static contextType = UserContext

    render() { 
        return (
            <div>
                Component E context is {this.context} 
                <ComponentF  />
            </div>
        );
    }
}
 
export default ComponentE;