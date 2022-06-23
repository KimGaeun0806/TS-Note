// object 타입은 인터페이스와 클래스의 상위 타입
// object 타입으로 선언된 변수는 number, boolean, string 타입의 값을 가질 수 없지만, 속성 이름이 다른 객체를 자유롭게 담을 수 있음
let o2: object = {name: 'Jack', age: 32} // 변수 o2는 name과 age 속성으로 구성된 객체만 가질 수 있음

// 인터페이스 선언문
// 객체의 타입을 정의할 수 있게 하는 interface 키워드
// 객체를 의미하는 중괄호로 속성의 이름과 타입을 나열하는 형태
// 인터페이스 속성들을 여러 줄로 구현할 때는 쉼표(,), 세미콜론(;)을 사용하거나 줄바꿈만 해도 됨
// IPerson 인터페이스는 name과 age라는 이름의 속성이 둘 다 있는 객체만 유효하도록 함 (둘 중 하나라도 없거나 다른 것이 더 있으면 x)
interface IPerson {     // interface 인터페이스이름 {
    name: string        //     속성이름[?]: 속성타입[,...]
    age: number         // }
}

// 선택 속성 -> 인터페이스에서 있어도 되고 없어도 되는 형태의 속성
// 속성 이름 뒤에 물음표 기호를 붙여서 만듦
interface IPerson2 {
    name: string    // 필수 속성
    age: number     // 필수 속성
    etc?: boolean   // 선택 속성
}

// 익명 인터페이스 -> interface 키워드도 사용하지 않고 인터페이스 이름도 없는 인터페이스 
let ai: {
    name: string    
    age: number     
    etc?: boolean   
} = {name: 'Jack', age: 32}
// 주로 함수를 구현할 때 사용됨
function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}
printMe(ai) // Jack 32 가 출력됨








