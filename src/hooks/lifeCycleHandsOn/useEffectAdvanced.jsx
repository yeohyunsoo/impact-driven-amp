// 기타 반드시 알아둬야 할 useEffect 관련 사항

/**
 * 1/ useEffect 메서드는 콜백 함수 내에서 호출할 수 없다.
 * 
 * e.g) 
 * [나쁜 예시] 분리따위 하지 않고 한 곳에 몰빵해서 작성
 * handleClick = () => {
 *  useEffect(() => {
 *      console.log(`status update on count: ${count}`);
 *  }, [count]);
 *  // ...
 * }
 * 
 * [좋은 예시] 분리해서 작성
 * useEffect(() => {
 *  console.log(`status update on count: ${count}`);
 * }, [count]);
 * 
 * handleClick = () => {
 *  setCount(count + 1);
 * }
 */

/*
2/ Cleanup function

*/

import React, { useState, useEffect } from 'react';


/**
 * 버튼을 누르면 타이머가 증가하는데(1000ms씩), 타이머의 현재 상태를 출력하는 타이머를 만들어보자.
 * 다만 이 코드에서는 버튼을 직접적으로 다루진 않고, useEffect를 활용한 버튼 위에 씌울 로직만 만든다.
 * @returns \
 */



export default function useEffectAdvanced(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {  
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return count;
}