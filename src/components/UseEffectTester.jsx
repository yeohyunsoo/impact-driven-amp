/**
 * eventHandler 따위는 가미되지 않은 순수한 useEffectTester임
 * 그냥 input 박스에서 directly onChange를 받음
 */

import React, {useState, useEffect} from 'react';
import useEffectOne from '../hooks/lifeCycleHandsOn/useEffectOne';
import useEffectTwo from '../hooks/lifeCycleHandsOn/useEffectTwo';
import useEffectThree from '../hooks/lifeCycleHandsOn/useEffectThree';

export default function UseEffectTester() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <> 
         <input 
                type="text" 
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
            /> <br/>
            <input 
                type="number" 
                placeholder="Enter age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={
                useEffectOne({name, age})
            }>SUBMIT</button>
            {
                useEffectTwo({name, age})
            } 
            {
                useEffectThree({name, age})
            }
        </>
    )
}