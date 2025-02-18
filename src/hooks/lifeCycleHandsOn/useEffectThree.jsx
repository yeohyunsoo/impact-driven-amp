import React, {useState, useEffect} from 'react';

export default function useEffectThree() {

    let [nameInput, setNameInput] = useState('');
    let [ageInput, setAgeInput] = useState('');

    useEffect(() => {
        console.log('specific status update happened')
    }, [nameInput, ageInput])
}