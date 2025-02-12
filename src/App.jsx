import React, { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';
import List from './components/List';
import Profile from './components/Profile';
import ParentComponent from './components/ParentComponent';

function App() {
  let className = 'sample';
  let post = 'Hello, world!'
  let text;
  let textColor;
  /*
   * useState는 반드시 React 컴포넌트 내부에서 호출되어야 한다.
   */
  let [count, setCount] = useState(0); // 중요한 데이터는 변수 (let, const)가 아닌 state에 담는다.
  let [isModalOn, setIsModalOn] = useState(false);
  let [colorSwitch, setColorSwitch] = useState(false);
    

  /*
  - 모달 켜고 끄는 것도 useState로 관리한다.
  step 01. 모달 상태 관리를 위한 state를 선언하고
  step 02. 어떤 버튼 누르면 그 state 값을 true 또는 false로 변경함.
  */
  // if(isModalOn === true){
  //   return(
  //     <div>
  //       <h3> 안녕하세요 모달입니다. </h3>
  //       <button onClick={() => setIsModalOn(false)}>모달창 닫기</button>
  //     </div>
  //   )
  // }
  

  /*
  - 스위치도 유사한 원리로 동작한다.
  step 01. html, css로 미리 디자인을 완성하고, (값이 변동되는 부분은 당연히 {변수}로 작성)
  step 02. UI의 현재 상태를 state로 저장하고,
  step 03. state에 따라 UI가 어떻게 보일지 작성한다.
  */
  if(colorSwitch === true){
    textColor = 'blue';
    text = '색상 원래대로';
  }else{
    textColor = 'black';
    text = '색상 변경';
  }
  /*
  0. class 대신 className을 사용한다.

  1. react에서는 js와 html 같이 쓰기 위해 jsx 문법을 사용함
  - href, src, className 등의 속성에 {}를 통해 값을 부여할 수 있고,
  - {}를 통해 html 내부에서 js를 사용할 수 있다. (물론, for loop 등 일부 사용 불가한 문법도 있음)

  2. 내부에 style 속성을 넣을 때는 style = {{key:"value"}} 형식으로 넣는다. (중괄호 두 개 써야 함)
   */
  return (
    <div className="App">
      <div className = {className} style={{color: 'blue', fontSize: '20px'}}>
        <h1>{post}</h1> 
      </div>
      {/* onClick안에는 함수밖에 못 들어감 >> 그래서 무기명 함수를 많이 사용함 */}
      <button onClick={() => setCount(count + 1)}>💕</button>
      <p>좋아요 개수: {count}</p>
      <button onClick={() => setIsModalOn(true)}>모달 열기</button> <br /><br />
      {/* true <> false 상태 변경할때는 ! 사용 */}
      <button onClick={() => setColorSwitch(!colorSwitch)} style={{color: textColor}}>{text}</button>
      <Article />
      <List />
      {/* <Profile /> */}
      <ParentComponent />
      <br/>
      <button style={{color: 'blue', fontSize: '20px'}} onClick={() => setIsModalOn(!isModalOn)}>모달 열기</button>
      {
        isModalOn === true ? <Modal /> : null
      }
    </div>
  );
}

function Modal(){
  return(
    <div>
      <h3> 안녕하세요 모달입니다. </h3>
      <p>content goes here</p>
      <p>explanation goes here</p>
    </div>
  )
}

export default App;
