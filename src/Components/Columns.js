import React from "react";

function Columns(){
    const items = []
    return(
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                       <h1>Title</h1>
                       <p>i,
                        {item.title}
                       </p>
                    </React.Fragment>
                ))
            }
            <td>name</td>
            <td>ysihak</td>
        </React.Fragment>
    )
}

export default Columns