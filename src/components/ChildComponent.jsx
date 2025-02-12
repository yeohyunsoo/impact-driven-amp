import React from 'react';

const ChildComponent = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Organization: {props.organization}</p>
        </div>
    )
}

export default ChildComponent;