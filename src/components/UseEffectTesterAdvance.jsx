import React, {useState, useEffect} from 'react';
import useEffectAdvanced from '../hooks/lifeCycleHandsOn/useEffectAdvanced';

export default function UseEffectTesterAdvance(){
    const count = useEffectAdvanced()
    return(
        <>
            <h1>Hope this works. LOL</h1>
            <p>타이머 카운트: {count}</p>
        </>
    )   
    
}