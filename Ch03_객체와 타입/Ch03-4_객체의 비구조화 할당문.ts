let personName = 'Jack'
let personAge = 32
let companyName = 'Apple Company, Inc'
let companyAge = 43
// 위와 같은 방식으로 구현하기보다는, 아래와 같이 인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현하는 것이 좋음. 이를 '구조화'라고 함.
// 구조화를 통해 비슷한 유형의 변수를 쉽게 만들 수 있고, 코드의 기능 확장이 수월해짐
export interface IPerson {
    name: string
    age: number
}
export interface ICompany {
    name: string
    age: number
}
// 다른 폴더에서 import {Iperson, ICompany} from './폴더명' 한 후 아래와 같이 사용할 수 있음
let jack: IPerson = {name: 'Jack', age: 32}, 
    jane: IPerson = {name: 'jane', age: 32} 
let apple: ICompany = {name: 'Apple Computer, Inc', age: 43}, 
    ms: ICompany = {name: 'Microsoft', age: 44}

// 비구조화 -> 구조화된 데이터를 분해하는 것
let name = jack.name, age = jack.age // 구조화된 jack 변수에서 jack.name, jack.age 부분을 각각 name과 age 변수에 저장

// 비구조화 할당
// let {name, age} = jack

// 잔여 연산자 (사용되는 위치에 따라 잔여 연산자인지 전개 연산자인지가 달라짐)
let adress: any = {
    country: 'Korea',
    city: 'Seoul',
    adress1: 'Gangnam-gu',
    adress2: 'Sinsa-dong 123-456',
    adress3: '789 street, 2 Floor ABC building'
}
const {country, city, ...detail} = adress // country와 city를 제외한 나머지 속성을 detail 변수에 저장

// 전개 연산자 -> 점3개 연산자가 비구조화 할당문이 아닌 곳에서 사용될 때
// 객체의 속성을 모두 전개해 새로운 객체로 만들어줌
let part1 = {name: 'jane'}, part2 = {age: 22}, part3 = {city: 'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged) // { name: 'jane', age: 22, city: 'Seoul', country: 'Kr' } 출력


