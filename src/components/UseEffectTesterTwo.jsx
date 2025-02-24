import React, {useState, useEffect} from 'react';
import useEffectOne from '../hooks/lifeCycleHandsOn/useEffectOne';
import handleEnterKeyPress from '../utils/handleEnterKeyPress';

export default function UseEffectTesterTwo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    
    useEffect(() => {
        if (name && age) { //if both name and age are truthy ($ne{null} && $ne{undefined})
            window.alert(`Effect triggered with name: ${name} and age: ${age}`);
            // Your effect logic here
        }
    }, [name, age]); //state change가 없으면 실행되지 않음 ㅇㅇ && 모든 state 변경에 대해 useEffect하고 싶지만, mount 됐을 때는 실행하지 않고 싶다면

    const handleSubmit = () => {
        const nameValue = document.querySelector('.name-input').value;
        const ageValue = document.querySelector('.age-input').value;
        
        setName(nameValue);
        setAge(ageValue);

        console.log(`이름: ${nameValue} && 나이: ${ageValue}`);
        
        //원칙적으로 hook function은 콜백 함수 내에서의 사용이 불가함
        
    }

    return (
        <>
            <input
                className="name-input"    
                type="text"
                placeholder="이름을 입력하세요"
                onKeyDown={(e) => handleEnterKeyPress(e, handleSubmit)}
            />
            <input
                className="age-input"    
                type="number"
                placeholder="나이를 입력하세요"
                onKeyDown={(e) => handleEnterKeyPress(e, handleSubmit)}
            />
            <button onClick={handleSubmit}>제출하기</button>
        </>
    )
}