// file under s3 bucket : https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json

/*
1. Component의 Lifecycle 이해하기
- Component의 Lifecycle을 잘 보면..! >> 1) 페이지에 장착되기도 하고(Mount), 2) 가끔 업데이트도 되고(Update), 3) 필요 없으면 제거되고(Unmount) ㅇㅇ
- 이런 Lifecycle 사이에 간섭해서 코드 실행이 가능하다면..?

2. Hook에 적은 코드가 간섭하는 조건은..?
- 기본은 Component에 대해 발생하는 모든 State Update에 대해 코드가 실행되는거고,
- '나는 Mount가 될때만 간섭할래!', '나는 특정 state가 update될때만 간섭이 발생하게 할래!' 등을 높은 자유도로 설정할 수 있다.

3. useEffect는 이런 컴포넌트의 
*/

export const fetchUser = async () => {
    const response = await fetch('https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json')
    const data = await response.json()
    return data
}