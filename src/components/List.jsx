import React, {useState} from 'react';

export default function List(){
    let [sampleList, setSampleList] = useState(['article1', 'article2', 'article3']);
    let [count, setCount] = useState([0,0,0]);

    return(
        <div className = "list">
            <h4>{sampleList[0]}</h4>
            <button onClick={()=> {
                let copyCount = [...count];
                copyCount[0]++;
                setCount(copyCount);
            }}>LIKE!!</button>
            <p>좋아요 개수: {count[0]}</p>
        </div>
    )
}