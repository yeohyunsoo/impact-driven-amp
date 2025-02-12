import React from 'react';


export default function Profile() {

    let profileArr = [{name: '지민', age: 10, organization: '연세대'}, {name: '현수', age: 20, organization: '오케스트로'}, {name: '철수', age: 75, organization: "교수"}]

    return (
        <div>
            {profileArr.map((i) => {
                return (
                    <div key={i.name}>
                        <p>{i.name}</p>
                        <p>{i.age}</p>
                        <p>{i.organization}</p>
                    </div>
                )
            })}
        </div>
    )
}