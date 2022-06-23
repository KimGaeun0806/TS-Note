// 타입 주석 -> 타입을 명시
// let 변수이름: 타입  [=초기값]
// const 변수이름: 타입 = 초기값
// let으로 선언한 변수값은 타입 주석으로 명시한 타입에 해당하는 값으로만 바꿀 수 있음
let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

// 타입 추론 -> 타입 주석 부분 생략 가능, 타입스크립트 컴파일러는 그런 코드를 만나면 대입연산자 오른쪽 값에 따라 변수의 타입 지정
let n1 = 1          // n1의 타입을 number로 판단
let b1 = true       // b1의 타입을 boolean으로 판단
let s1 = 'hello'    // s1의 타입을 string으로 판단
let o1 = {}         // o의 타입을 object로 판단

// any 타입 -> 어떤 종류의 값도 저장할 수 있음
let a: any = 0 

// undefined 타입 -> 타입이기도 하고 값이기도 함
// any는 최상위 타입, undefined는 최하위 타입
let u: undefined = undefined // 오직 undefined값만 가질 수 있음. undefined의 상위 타입인 number과 같은 타입을 저장하려고 하면 오류 발생. 



