import IPerson from "./person/IPerson"
import Person, { makePerson } from "./person/Person"
// export default로 지정된 Person과 export로 지정된 makePerson
import Chance from "chance"
// chance 패키지는 가짜 데이터를 만들어줌
import * as R from 'ramda'
// ramda는 함수형 유틸리티 패키지 
// import { 심벌 목록 } from '파일의 상대 경로'

// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = new Person('Jack')
//     console.log(jane, jack)
// }
// testMakePerson()

const chance = new Chance()
let persons: IPerson[] = R.range(0,2).map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)


