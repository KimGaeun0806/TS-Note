// 매개변수 기본값 지정하기 
// 디폴트 매개변수 -> 함수 호출 시 인수를 전달하지 않더라도 매개변수에 어떤 값을 설정하고 싶다면 매개변수 기본값 지정 가능
// (매개변수: 타입 = 매개변수기본값)
export type Person = {name: string, age: number}
export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name: name, age: age}
    return person
}
console.log(makePerson('Jack'))     // { name: 'Jack', age: 10 } 출력 // 매개변수 age에 해당하는 값을 전달받지 못하면 기본으로 10이 설정됨
console.log(makePerson('Jane', 33)) // { name: 'Jack', age: 33 } 출력

// 객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문 
// 매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들 수 있는데, 이 때 속성값 부분을 생략할 수 있는 '단축 구문'
const makePerson2 = (name: string, age: number) => {
    const person = {name, age} // {name: name, age: age}의 단축 표현
}

// 객체를 반환하는 화살표 함수 만들기 
// 컴파일러가 {}를 객체로 해석하게 하려면 소괄호로 감싸주어야 함
export const makePerson3 = (name: string, age: number = 10): Person => ({name, age})

// 매개변수에 비구조화 할당문 사용하기 
export type Person2 = {name: string, age: number}
const printPerson = ({name, age}: Person): void => console.log(`name: ${name}, age: ${age}`)
printPerson({name: 'Jack', age: 10})

// 색인 키와 값으로 객체 만들기 
// 객체의 속성 이름을 변수로 만들 때 사용하는 코드
const makeObject = (key, value) => ({[key]: value})
console.log(makeObject('name', 'Jack'))         // { name: 'Jack' } 출력
console.log(makeObject('firstName', 'Jane'))    // { firstName: 'Jane' } 출력
// 색인 가능 타입 ->  {[key]: value} 형태의 타입
export type KeyValueType = {
    [key: string]: string
} // 이런 형태로 key와 value의 타입 명시
export const makeObject2 = (key: string, value: string): KeyValueType => ({[key]: value})
console.log(makeObject2('name', 'Jack'))        // { name: 'Jack' }
console.log(makeObject2('firstName', 'Jane'))   // { firstName: 'Jane' }


