import React, {useState} from 'react';


export default function Profile() {


    let [profileArr, setProfileArr] = useState([{name: '지민', age: 10, organization: '연세대', like: 0}, {name: '현수', age: 20, organization: '오케스트로', like: 0}, {name: '철수', age: 75, organization: "교수", like: 0}])
    
    return (
        <div>
            {profileArr.map((a, index) => { // a는 각 배열의 값을, index는 각 배열의 인덱스를 의미
                return (
                    <div key={a.name}>
                        <p>{a.name}</p>
                        <p>{a.age}</p>
                        <p>{a.organization}</p>
                        <button onClick={() => {
                            let copyProfileArr = [...profileArr]
                            copyProfileArr[index].like += 1
                            setProfileArr(copyProfileArr)
                        }}>Like</button>
                        <span> {a.like}명이 좋아합니다.</span>
                    </div>
                )
            })}
        </div>
    )
}