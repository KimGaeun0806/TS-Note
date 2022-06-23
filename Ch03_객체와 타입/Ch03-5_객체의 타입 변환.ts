// 타입 변환 -> 특정 타입의 변숫값을 다른 타입의 값으로 변환하는 기능
let person: object = {name: 'Jack', age: 32} 
console.log((<{name: string}>person).name) 
// person 변수의 타입은 object인데, object 타입은 name 속성을 가지지 않으므로 person.name은 오류가 발생함
// person 변수를 일시적으로 name 속성이 있는 타입, 즉 {name: string} 타입으로 변환해 person.name 속성값을 얻게 함 

// 타입 단언 -> 타입스크립트는 타입 변환이 아닌 타입 단언이라는 용어를 사용함
// (<타입>객체) 혹은 (객체 as 타입) 형태를 사용
interface INameable {
    name: string
}
let obj: object = {name: 'Jack'}
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
