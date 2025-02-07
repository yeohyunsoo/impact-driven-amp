// named export - 여러 개 존재 가능
// import 할 때 중괄호 사용
export function add (a, b){
    return a + b;
}

export function subtract (a, b){
    return a - b;
}

// default export - 한 모듈에서 하나만 존재 가능
// import 할 대 중괄호 없이 함수 이름만 사용해 import 가능
export default function multiply (a, b){
    return a * b;
}