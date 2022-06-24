// 타입스크립트 함수 선언문은 자바스크립트 함수 선언문에서 매개변수와 함수 반환값에 타입 주석을 붙이는 형태
// function 함수이름(매개변수: 타입1, 매개변수2: 타입2[,...]): 반환값타입 {
//     함수 몸통
// }
function add(a: number, b: number): number {
    return a + b
}

// 매개변수(parameter)는 함수 선언문에서 함수 이름 뒤 괄호 안에 선언하는 변수
// 인수/인자(argument)는 함수를 호출할 때 전달하는 값 

// 매개변수와 반환값에 대한 타입 주석을 생략할 수 있지만 바람직하지 않음

// void 타입 -> 값을 반환하지 않는 함수는 반환 타입이 void임
// void 타입은 함수 반환 타입으로만 사용할 수 있음
function printMe(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`)
}

// 함수 시그니처 -> 함수의 타입 
// (매개변수1타입, 매개변수2타입[,...]) => 반환값타입
// (sting, number) => void
let printMe2: (string, number) => void = function (name: string, age: number): void {}

// type 키워드로 타입 별칭 만들기 
// 타입 별칭 -> type  키워드는 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게 해줌 
// type 새로운타입 = 기존타입
type stringNumberFunc = (string, number) => void // (string, number) => void 함수 시그니처를 stringNumberFunc이라는 이름으로 타입 별칭
let f: stringNumberFunc = function(a: string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}

// undefined 관련 주의사항
// 오류를 방지하려면 매개변수값이 undefined인지 판별하는 코드를 작성해야 함 
// 아래 코드들 오류 발생..
// interface INameable {
//     name: string
// }
// function getName(o: INameable) {
//     return o != undefined ? o.name : 'unknown name'
// }
// let n = getName(undefined)
// console.log(n) // unknown name
// console.log(getName({name: 'Jack'})) // Jack
// 인터페이스에 선택 속성 있으면 아래와 같이 작성
// interface IAgeable {
//     age?: number
// }
// function getAge(o: IAgeable) {
//     return o != undefined && o.age ? o.age : 0
// }
// console.log(getAge(undefined))
// console.log(getAge(null))
// console.log(getAge({age:32}))

// 선택적 매개변수 
function fn(arg1: string, arg?: number){console.log(`arg: ${arg}`)}
fn('hello', 1) // arg: 1 출력
fn('hello') // arg: undefined 출력
// 선택적 매개변수가 있는 함수의 시그니처는 타입 뒤에 물음표를 붙임
// type OptionalArgFunc = (string, number?) => void



