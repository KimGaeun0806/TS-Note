import * as U from '../utils/makeRandomNumber'
import IPerson from './IPerson'

// import * as 심벌 from '파일 상대 경로'
// makeRandomNumber 함수 이름 앞에 U. 추가 

export default class Person implements IPerson {
    constructor(public name: string, public age: number = U.makeRandomNumber()) {}
}

export const makePerson = (name: string, 
    age: number = U.makeRandomNumber()) => ({name, age})

// export 키워드는 function, interface, class, type, let, const 키워드 앞에 붙일 수 있음