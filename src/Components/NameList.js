import React from "react";
import Person from "./Person";

function NameList(){
    const names =['Bruce','Clark','Diana','Bruce']
    const nameList  =  names.map(name => <h2 key={name}>{name}</h2>)
    // const nameList  =  names.map((name,index) => <h2 key={index}>{name}</h2>)//if the list has no unique item/ if the list is static

    const persons = [
        {
            id : 1,
            name : 'ysihak',
            age : '20',
            skill : 'React'
        },
        {
            id : 2,
            name : 'haile',
            age : '20',
            skill : 'Node'
        },
        {
            id : 3,
            name : 'bamlaku',
            age : '20',
            skill : 'django'
        }
    ]

    // const personList = persons.map(person => <h2>
    //     My name is {person.name}, I'm {person.age} years of age, and I know {person.skill}
    // </h2>)

    const personList = persons.map(person => 
        <Person key= {person.id} person = {person}></Person>
        )

    return(
        <div>
            {/* <h2>{names[0]} </h2>
            <h2>{names[1]} </h2>
            <h2>{names[2]} </h2> */}
            {/* {
                names.map(name => <h2>{name}</h2>)
            } */}

            {nameList}

            {personList}

        </div>
    )
}
export default NameList