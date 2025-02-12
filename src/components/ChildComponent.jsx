import React from 'react';

// TODO: props 받아는 오는데, 빨간 줄 뜨는 이유 알아봐야 할듯
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