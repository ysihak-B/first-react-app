import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() { 
        return (
            //recommended way to consume contexts
            <UserConsumer>
               {
                (username) => {
                    return <div>Component F context is {username} </div>
                }
               }
            </UserConsumer>
        );
    }
}
 
export default ComponentF;

// //this is how multiple cotexts consumed

// function multipleContext (){
//     return(
//         <div>
//             <UserConsumer>
//             {
//                 (username) => (
//                     <ThemeConsumer>
//                         {
//                             (theme) =>(
//                                 <profilePage user={username} theme={theme} />
//                             )
//                         }
//                     </ThemeConsumer>
//                 )
//             }
//             </UserConsumer>
//         </div>
//     )
// }