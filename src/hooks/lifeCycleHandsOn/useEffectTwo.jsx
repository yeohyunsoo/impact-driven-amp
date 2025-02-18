import React, {useState, useEffect} from 'react';

export default function UseEffectTwo() {

    let [nameInput, setNameInput] = useState('');
    let [ageInput, setAgeInput] = useState('');


    useEffect(() => {
        console.log('component has been mounted successfully')
    }, [])
}