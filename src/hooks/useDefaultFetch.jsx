// file under s3 bucket : https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json

/*
[Disclaimer]
- 기본 훅의 종류도 너무 많고, 커스텀 훅도 만들어서 사용할 수 있음
- 각각의 훅의 "기능"에 너무 초점을 두기보다는 <훅>이라는 개념 자체의 원칙에 집중

1. Component의 Lifecycle 이해하기
- Component의 Lifecycle을 잘 보면..! >> 1) 페이지에 장착되기도 하고(Mount), 2) 가끔 업데이트도 되고(Update), 3) 필요 없으면 제거되기도 함(Unmount)

2. 훅은 왜 쓰는데?
- <훅>은 함수형 컴포넌트에서 "상태"와 "생명주기"를 쉽게 관리하기 위해 사용됨
    ex) 컴포넌트가 Mount될 때 1회에 한정해 코드를 실행하거나, 특정 State가 Update 될때마다 코드를 실행하는 등

- 이외에도 <훅>을 사용하면 코드의 가독성을 높이는 한편 성능을 최적화할 수 있다는 장점도 있음

3. React 기본 훅 VS 커스텀 훅
- 기본 훅, 커스텀 훅과 무관하게 <훅>은 useSth = () => {} 형태 (또는 useSth(()=> {]}) 형태) 로 작성함

- 대표적인 기본 훅) useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback 등
    >> 그 중에서도 useState, useEffect를 가장 많이 사용함
    >> useState: 그냥 변수 쓰면 상태가 바뀌어도 화면상 업데이트 안됨 -> useState를 통해 <상태> 관리를 용이하게
    >> useEffect: 컴포넌트의 <생애주기>에 따라 특정 코드가 실행되도록 함 (여기서 Effect는 sideEffect 즉, 함수 내 핵심 기능과 상관없는 부가 기능을 처리함을 의미)

- 커스텀 훅) 1/ 여러 기본 훅을 묶어서 "커스텀" 훅을 만들 수 있음 && 2/ 코드의 재사용성, 가독성을 높일 수 있음
*/

import { useState, useEffect } from 'react';

const useDefaultFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                console.log("status: ", response.status); // CORS 등 Server-side 문제가 없는지 확인하기 위함
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.status);
                }
                const jsonData = await response.json(); // JSON 데이터 파싱
                setData(jsonData); // 전체 배열 데이터 저장
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useDefaultFetch;