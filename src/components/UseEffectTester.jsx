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
            />
            <input 
                type="number" 
                placeholder="Enter age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <useEffectOne name={name} age={age} />
        </>
        
    )
}