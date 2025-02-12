import React, { useState } from 'react';

/*
- 글 목록 보여주는 리스트 있어야 할듯
- 글 목록 보여주는 리스트 안에 삭제, 수정 버튼도 있으면 좋을듯
- 일단 글 입력하는 박스도 있어야 할듯 > 입력하면 바로 반영 ㅇㅇ
*/

export default function InputBox(){
    
    let [inputArr, setInputArr] = useState([]); //author, title, content,
    let [likeArr, setLikeArr] = useState([]);
    //{author: "작가", title: "제목", content: "사용자가 작성한 내용"

    return(
        <>
            <div className='input-box-container'>
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
            <div className='contents-list'>
                {
                    inputArr.map((a,i) => {
                        return(
                            <>
                                <h4>{a.title}</h4>
                                <span>
                                    <p>{a.author}</p>
                                    <p>{a.title}</p>
                                    <p>{a.like}</p>
                                </span>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}