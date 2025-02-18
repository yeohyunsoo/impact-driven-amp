import React, {useState, useEffect} from 'react';
import useDefaultFetch from '../hooks/useDefaultFetch';

export default function DefaultFetchHookComponent() {
    let {data, loading, error} = useDefaultFetch('https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json');

    return(
        /*
        [data type]
        - array 안에 여러 object들이 들어있는 구조
        - map function으로 반복문 돌면서 데이터 렌더링해주면 될듯
        - 다만 Loading, Error 상태에 대한 처리 필요
        */
        <>
            <div className='content-data'>
                {
                    loading === true ? <div>Loading...!</div> : 
                    error ? <div>Error: {error.message}</div> :
                    (<div>
                        <h1>Default Fetch Hook Component</h1>
                        {
                            data.map((a, i) => (
                                <div key={a.author}>
                                    <h1>Title: {a.title}</h1>
                                    <h3>Author: {a.author}님</h3>
                                    <p>{a.content}</p>
                                </div>
                            ))
                        }
                    </div>)             
                }
            </div>
        </>
    )
}