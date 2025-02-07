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
console.log('resting for 2 seconds, 아래 함수가 먼저 실행돼요!');

setTimeout(function () { // 이게 비동기 함수임. () => {}의 arrow function으로도 만들 수 있을듯.
  //setTimeOut = asyncronous function; 일단 저 아래의 Hello, World! 부터 실행됨
  console.log('this is how you use anonymous function inside another function');
}, 2000);

let simpleAnonymousFunction = () => {
  console.log('Hello, World!');
};

simpleAnonymousFunction();

// Hands On 7. function with rest parameter
// - 'rest'라는 워딩에서 그대로 드러나듯, 정해지지 않은 개수의 나머지 param을 다룰 때 활용한다.
// - 이때 나머지 param은 배열의 형태로 저장된다.

function restParamFunctionWithNumber(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(
  'restParamFunctionWithNumber: ',
  restParamFunctionWithNumber(1, 2, 3, 4)
);

function restParamFunctionWithString(greet, ...names) {
  // console.log(greet)
  // names.map(i => console.log(i))
  return `${greet}, ${names.join(' and ')}`;
}

console.log(
  'restParamFunctionWithString: ',
  restParamFunctionWithString('Hello', 'Alice', 'Bob', 'Charlie')
);

// Hands On 8. function with destructuring
function destructuringFunction(a, b, c) {
  console.log(a, b, c);
}

destructuringFunction(1, 2, 3);

// Hands On 9. function with spread operator
function displayUserInfo({ name, age, country = 'Unknown' }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

const userA = {
  name: 'Alice',
  age: 25,
  country: 'USA',
};

displayUserInfo(userA);
displayUserInfo({ name: 'Bob', age: 30 });

// Hands On 10. function with async & await
// 1. 프로그램 세상에는 두 종류의 작업이 있음 (동기, 비동기) >> 동기는 즉시 실행, 완료되는 작업인 반면 비동기는 시간이 걸리는 작업
// 2. 자바스크립트는 싱글스레드 언어이지만, 시간이 오래 걸리는 작업은 이후 작업이 먼저 실행되게 함으로써 병렬처럼 보이게 할 수 있음 (멈추지 않고 계속 진행)
// 3. BUT 때로는 비동기 작업이 완료된 후에만 다음 작업을 실행해야 할 때가 있음 (i.e, 데이터 가져온 다음에 그 데이터 기반으로 다음 작업 실행한다던가)
// 4**. 비동기 함수의 역할은 비동기 작업이 완료될 때까지 코드 실행을 일시 중지 하도록 도와주는 것.

// [AS-WAS] 옛날옛적에는 fecth와 .then() / .catch() 메서드를 사용해 비동기 작업을 처리했음
// 1. 비동기 작업을 처리하는 함수를 만들고, 그 함수를 .then() 메서드에 전달
// 2. 비동기 작업이 완료되면, .then() 메서드에 전달된 함수가 실행됨
// 3. 비동기 작업이 실패하면, .catch() 메서드에 전달된 함수가 실행됨
function fetchUserDataDeprecated() {
  fetch('https://api.example.com/user')
    .then(response => {
      if (!response.ok) {
        console.log('여기가 문제임 1'); // 디버깅 할 때 어디가 문제인지 찾는 유효한 방법ㅋㅋ
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      console.log('User Name:', data.name); // Log the user's name
    })
    .catch(error => {
      console.log('여기가 문제임 2'); // for debugging (나중에 자주 씀 ㅇㅇ)
      console.error('There was a problem with the fetch operation:', error);
    });
}

fetchUserDataDeprecated();

// [AS-IS] 콜백 지옥 및 코드 가독성 저하 문제 발생 -> async, await 사용함
// 1. async를 사용해 비동기 함수를 선언하고,
// 2. 기다려야 하는 지점에서 await 키워드를 사용해 비동기 작업이 완료될 때까지 기다림

async function fectchUserDataAsync(){
  try {
    const response = await fetch('https://api.example.com/user');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse the JSON from the response
    console.log('User Name:', data.name); // Log the user's name
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fectchUserDataAsync();

// Hands On 11. function with promise



// Hands On 12. function with callback

// [04. if, else, switch / try, catch, finally]
