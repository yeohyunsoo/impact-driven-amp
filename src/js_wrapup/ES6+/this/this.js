// 전역 객체를 참조하려면 (쓸 일 없음)
console.log(this);

// 함수 내부에서는 함수를 호출한 객체를 참조
const person = {
    name: 'John',
    seyHello: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.seyHello();

// 생성자 함수에서는 생성된 인스턴스를 참조
function Person(name){
    this.name = name;
    this.sayHello = function(){
        
    }
}