import React, {useState, useEffect} from 'react';
import useDefaultFetch from '../hooks/useDefaultFetch';

export default function DefaultFetchHookComponent() {
    let {data, loading, error} = useDefaultFetch('https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json');

    return(
        <>
            <div className='content-data'>
                {
                    loading === true ? <div>Loading...!</div> : 
                    error ? <div>Error: {error.message}</div> :
                    (<div>
                        <h1>Default Fetch Hook Component</h1>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>)             
                }
            </div>
        </>
    )
}