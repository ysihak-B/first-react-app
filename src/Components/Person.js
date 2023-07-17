import React from "react";

function Person ({person}){
    return(
        <div>
            <ul>
                <li>
                My name is {person.name}, I'm {person.age} years of age, and I know {person.skill}
                </li>
            </ul>
        </div>
    )
}

export default Person