import React,{ Component } from "react"

class Hello extends Component{ //class component
    render(){
        return(
            <div>
                <h1>
                    Wellcome Bamalku
                </h1>
            </div>
        )
    }
}

// const Hello = () => {
//     // return (
//     //     <div>
//     //         <h1> Hello Haile</h1>  // JSX method of writng
//     //     </div>
//     // )
//     return React.createElement(
//         'div',
//         {id : 'hello', className : 'wellcome'},
//         React.createElement('h1',null,'Hello Haile'))
// }

// class Hello extends Component{ //props in class component
//     render(){
//         return(
//             <div>
//                 <h1>
//                     Hello {this.props.name} a.k.s {this.props.heroname}
//                 </h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

// class Hello extends Component{ //destructuring props in class component
//     render(){
//         const {name, heroname} = this.props
//         return(
//             <div>
//                 <h1>
//                     Wellcome {name} a.k.s {heroname}
//                 </h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

export default Hello