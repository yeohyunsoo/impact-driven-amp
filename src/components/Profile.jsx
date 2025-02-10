import React from 'react';


const Profile = () => {

    let profileArr = [{name: '지민', age: 10, organization: '연세대'}, {name: '현수', age: 20, organization: '오케스트로'}, {name: '철수', age: 75, organization: "교수"}]

    return(
        <>
        {
            profileArr.map((i)=>{
                <div key={i.name}>
                    <h4>{i.name}</h4>
                    <p>{i.age}</p>
                    <span>{i.organization}</span>
                </div>
            })
        }
        </>
    )

}

export default Profile;