import React, {useState} from 'react';

export default function Article(){
	
	let [article, setArticle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
	let [reaction, setReaction] = useState ([0, 0, 0])

	return(
		<div className ="App">
			<div className = "list">
                <h4>{article[0]}
				<span onClick={() => {
                    let copyReaction = [...reaction];
                    copyReaction[0]++;
                    setReaction(copyReaction);
                }}>👍</span>{reaction[0]}</h4>
            </div>
		</div>
	)	
}