import React, { useState } from 'react';

/*
- 글 목록 보여주는 리스트 있어야 할듯
- 글 목록 보여주는 리스트 안에 삭제, 수정 버튼도 있으면 좋을듯
- 일단 글 입력하는 박스도 있어야 할듯 > 입력하면 바로 반영 ㅇㅇ
*/

export default function InputBox(){
    
    let [inputArr, setInputArr] = useState([]); //author, title, content
    let [likeArr, setLikeArr] = useState([]);
    //{author: "작가", title: "제목", content: "사용자가 작성한 내용"

    return(
        <>
            <div className='input-box-container'>
                <h1>SAMPLE POST PAGE</h1>
                <span>
                    <span> 이름을 입력하세요: </span> 
                    <input type='text' id='authorInput'/> <br/>
                    <span> 제목을 입력하세요: </span>
                    <input type='text' id='titleInput'/> <br/>
                    <span> 내용을 입력하세요: </span>
                    <input type='text' id='contentInput'/> <br/>
                    <button onClick={() => {
                        const title = document.getElementById('titleInput').value;
                        const author = document.getElementById('authorInput').value;
                        const content = document.getElementById('contentInput').value;
                        
                        setInputArr([...inputArr, {author, title, content}]);
                    }}>입력</button>
                </span>
            </div>
            {/* 글 목록 보는 Section (ft. 좋아요 버튼 기능 추가) */}
            <div className='contents-list'>
                {
                    inputArr.map((a,i) => {
                        return(
                            <div className='content-box' key={a.title}>  
                                {console.log(a)}
                                <h4>제목: {a.title}</h4>
                                <span>
                                    <p>작가: {a.author}</p>
                                    <p>내용: {a.content}</p>
                                </span>
                                <button onClick={() => {
                                    let newLikeArr = [...likeArr];
                                    // 데이터가 없으면 0으로 초기화
                                    if (newLikeArr[i] === undefined) {
                                        newLikeArr[i] = 0;
                                    }
                                    newLikeArr[i] += 1; // 좋아요 수 증가
                                    setLikeArr(newLikeArr);
                                }}>LIKE!!</button>
                                <button onClick={() => {
                                    let newInputArr = [...inputArr];
                                    newInputArr.splice(i, 1);
                                    setInputArr(newInputArr); 
                                }}>DELETE!!</button>
                                <p>Like Count: {likeArr[i]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}