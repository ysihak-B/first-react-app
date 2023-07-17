import React from "react";

const Frinput = React.forwardRef( (props, ref) => {
    return(
        <div>
            <input type='text' ref = {ref} />
        </div>
    )
})
export default Frinput;