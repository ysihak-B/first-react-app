// import React, { Component } from "react";
 
// function Greet(){   //functional component
//     return <h1>Hello Ysihak</h1>
// }

// const Greet = (props)=>{ // arrow function
//     return(
//         <div>
//             <h1>
//                 Hello {props.name} a.k.s {props.heroname}
//             </h1>
//         </div>
//     )
// }

//destructuring props

// const Greet = ({name,heroname})=>{
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.s {heroname}
//             </h1>
//         </div>
//     )
// }

const Greet = props =>{
    const {name, heroname} = props
    return(
        <div>
            <h1>
                Hello {name} a.k.s {heroname}
            </h1>
        </div>
    )
}

export default Greet