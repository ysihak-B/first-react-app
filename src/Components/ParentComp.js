import { Component } from "react"
// import RegComp from "./RegComp"
// import PureComp from "./PureComponent"
import MemoComp from "./MemoComponent"

class ParentComp extends Component{
    constructor(props){
        super(props)

        this.state ={
            name : 'ysihak'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'ysihak'
          })
        }, 2000)
    }

    render(){
        console.log(
            '**************** parent comp render***************'
        )
        return(
            <div>
                Parent Component
                {/* <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
    
export default ParentComp