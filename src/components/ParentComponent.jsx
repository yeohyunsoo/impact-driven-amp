/*
Parent-Child Component와 props의 사용

1. Parent Component에 모든 html 다 담으면 코드가 너무 지저분해짐
2. 분리할 수 있는건 Child Componet에 작성하면 코드 깔끔하게 읽을 수 있을듯
3. 다만 Child Component와 Parent Component는 엄연히 다른 함수이기에 Child에서 마음대로 Parent의 변수/함수 등을 사용할 수 없음
4. 이런 경우에 [부모 > 자식] 방향으로 'props'를 통해 데이터를 전달함
5. 이렇게 전달된 props는 자식 컴포넌트에서 사용할 수 있음 
ex) <ChildComponent message="Hello" title={title} edit={onClick()=>{..code..}/> 이런식으로 전달함
*/

import React, {useState} from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {

  const [message, setMessage] = useState(['message1', 'message2', 'message3']);
  const [user, setUser] = useState([{name: '지민', age: 10, organization: '연세대'}, {name: '현수', age: 20, organization: '오케스트로'}, {name: '철수', age: 75, organization: "교수"}]);
  const [like,setLike] = useState([0,0,0]);

  return(
    <>
        {
            message.map((a,i) => {
                return(
                    <div key={a}>
                        <h2>{a}</h2>
                        <span onClick={()=>{
                            const newLike = [...like];
                            newLike[i]++;
                            setLike(newLike);
                        }}>Press Like!</span>
                        <p>Like: {like[i]}</p>
                        <ChildComponent name={user[i].name} age={user[i].age} organization={user[i].organization} index={i}/>
                    </div>
                )
            })
        }
    </>
  )
}


export default ParentComponent;