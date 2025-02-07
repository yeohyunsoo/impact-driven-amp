/*
[Disclaimer] React로 넘어가기 전에 마지막으로 이 개념만 살펴보면 될 듯 - toc는 아래와 같음

1. 함수형 프로그래밍 (과거의 클래스 문법과 비교)
2. DOM
3. 이벤트 핸들링
p.s. props 없이도 상속하는 방법 이딴건 react하면 굳이 필요 없는 듯 (생략)
*/


// 01. 함수형 프로그래밍 (과거의 클래스 문법과 비교)

// 01-1. 함수형 프로그래밍 & 상속
const Person = (name, age, country) => {
	return {
		name,
		age,
		country,
        greet(){
            console.log(`Hello, I am ${this.name} from ${this.country}`)
        }
	}
}
const jimin = Person('Jimin', 24, 'Korea');
jimin.greet()


const Student = (name, age, country, school, major) => {
    return {
        // 정보 전달 효율성을 위해 필요 없는 greet()은 안 넘겨받음 - 고로 greet() 메서드는 Student 내에서 사용 불가
        ...Person(name, age, country), // Person에 넘겨 받은 값을 추가하는 역할
        school,
        major,
        printMajor(){
            console.log(`${this.name} is studying ${this.major} at ${this.school}`)
        }
    }
}
const studentOne = Student('Jimin', 24, 'Korea', 'Hanyang University', 'Computer Science');
studentOne.printMajor();

// 01-2. 클래스 문