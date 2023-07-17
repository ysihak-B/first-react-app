import { PureComponent } from "react";

class PureComp extends PureComponent{ //used inorder not to render the same element`    ``  
    render(){
        console.log('pure Component render')
        return(
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
    
export default PureComp