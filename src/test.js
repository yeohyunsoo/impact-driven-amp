// [01. variables]
let a = 'great now I can test my test.js file with node';
const b = 'Hello World';

console.log(a, ':', b);
console.log(a + b);

// [02. array, object & map function & spread operator (basics)]

// Hands On 1.

const mixedTypeArray = [1, 1.1, 'hello', true];
console.log(mixedTypeArray);

// 1/ mixedTypeArray에 map function을 씌움
// 2/ element는 그 안에서의 매개변수 (param) _ 당연히 뭘로 선언해도 무방
mixedTypeArray.map((element) => console.log(element));

// Hands On 2.

const objectInArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

console.log('print name in each object');
objectInArray.map((object) => console.log(object.name));

// Hands On 3. (CONT'D)

const userNames = objectInArray.map((object) => object.name);
console.log('userNames', userNames);

const userNames2 = [...userNames];
userNames2.push('Diana');
console.log('userNames2', userNames2);

// [03. function] As we can see below, so much usage of function is possible.

// Hands On 1. basic function
function printHello() {
  console.log('Hello');
}

printHello(); // 함수는 실행하지 않으면 결과가 나오지 않음 (선언만하고 어? 왜 안나오지?? 금지.)

// Hands On 2. function with param
function printHelloWithName(name) {
  console.log('Hello ', name);
}

printHelloWithName('Alice');

// Hands On 3. function with return value
function returnSum(a, b) {
  return a + b; // 매개변수와 전역변수는 독립적이다.
}

const [c, d] = [1, 2]; // 활용) map function 돌면서 Array에 저장된 값을 각각의 변수에 할당할 수 있을 듯
console.log(returnSum(c, d));

// Hands On 4. function with default param
function defaultParamFunction(a, multiplier = 3) {
  return multiplier * a;
}

console.log(defaultParamFunction(4));
console.log('defaultParam 덮어쓰기', defaultParamFunction(4, 2));

// Hands On 5. function with arrow function
const arrowFunction = (a, b) => a + b;

console.log(arrowFunction(1, 2));

// Hands On 6. function with anonymous function
console.log("resting for 2 seconds, 아래 함수가 먼저 실행돼요!");

setTimeout(function(){ //setTimeOut = asyncronous function; 일단 저 아래의 Hello, World! 부터 실행됨 ㅇㅇ\
    console.log("this is how you use anonymous function inside another function");
},2000)

let simpleAnonymousFunction = () => {
  console.log('Hello, World!');
};

simpleAnonymousFunction();

// Hands On 7. function with rest parameter
// - 'rest'라는 워딩에서 그대로 드러나듯, 정해지지 않은 개수의 나머지 param을 다룰 때 활용한다.
// - 이때 나머지 param은 배열의 형태로 저장된다.

function restParamFunctionWithNumber(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("restParamFunctionWithNumber: ", restParamFunctionWithNumber(1,2,3,4));


function restParamFunctionWithString(greet, ...names){
    // console.log(greet)
    // names.map(i => console.log(i))
    return(`${greet}, ${names.join(' and ')}`);
}

console.log("restParamFunctionWithString: ", restParamFunctionWithString('Hello', 'Alice', 'Bob', 'Charlie'));

// Hands On 8. function with destructuring
function destructuringFunction(a, b, c){
    console.log(a, b, c);
}

destructuringFunction(1, 2, 3);


// Hands On 9. function with spread operator
function displayUserInfo({ name, age, country = "Unknown" }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
} 
  
const userA = {
    name: "Alice",
    age: 25,
    country: "USA"
};
  
displayUserInfo(userA);
displayUserInfo({ name: "Bob", age: 30 });
  

// Hands On 10. function with async & await

// Hands On 11. function with promise

// Hands On 12. function with callback

// [04. if, else, switch / try, catch, finally]
