// 클래스 선언문
// class 클래스이름 {
//     [private | protected | public] 속성이름[?]: 속성타입[...]
// }
class Person1 { // name과 age라는 속성을 가진 클래스 선언
    name: string
    age?: number
}
// Person1 클래스에 new 연산자를 적용해 jack1이라는 이름의 Person1 타입 변수 생성
let jack1: Person1 = new Person1()
jack1.name = 'Jack'; jack1.age = 32
console.log(jack1) // Person1 { name: 'Jack', age: 32 } 출력

// 접근 제한자 -> 클래스의 속성은 public, private, protect와 같은 접근 제한자를 이름 앞에 붙일 수 있음. 생략하면 public으로 간주.

// 생성자 -> 타입스크립트 클래스는 constructor라는 메서드를 포함함
// 클래스의 속성(name, age)을 선언할 수 있음
// 생성자의 매개변수에 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작함
class Person2 {
    constructor(public name: string, public age?: number) { }
}
let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2) // Person2 { name: 'Jack', age: 32 } 출력

// 인터페이스 구현 -> 클래스가 인터페이스를 구현할 때는 implements 키워드 사용
// 인터페이스는 이러이러한 속성이 있어야 한다는 규약에 불과할 뿐 물리적으로 해당 속성을 만들지는 않음
// 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포햠해야 함 
// class 클래스이름 implements 인터페이스이름 {
//     ...
// }
interface IPerson4 {
    name: string
    age?: number
}
class Person4 implements IPerson4 {
    name: string
    age: number
}

// 추상 클래스 -> abstract 키워드를 class 키워드 앞에 붙여서 만듦
// 추상 클래스는 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 함
// 추상 클래스는 클래스와 달리 인스턴스를 생성하지 x
// abstract class 클래스이름 {
//     abstract 속성이름: 속성타입
//     abstract 메서드이름() {}
// }
abstract class AbstractPerson5 {
    abstract name: string // AbstractPerson5는 name 속성 앞에 abstract가 붙었으므로 new 연산자를 적용해 객체를 만들 수 x
    constructor(public age?: number) {}
}

// 클래스의 상속 -> extends 키워드를 사용해 부모 클래스를 상속받는 상속 클래스를 만들 수 있음
// class 상속클래스 extends 부모클래스 {...}
class Person5 extends AbstractPerson5 { // Person5 클래스는 AbstractPerson5 추상 클래스를 상속해 AbstractPerson5가 구현한 age를 얻고, AbstractPerson5를 상속받는 클래스가 구현해야 할 name 속성을 구현함
    constructor(public name: string, age?: number) {
        super(age) // 부모 클래스의 생성자를 super 키워드로 호출할 수 있음
    }
}
let jack5: Person5 = new Person5('Jack', 32)
console.log(jack5)

// static 속성 -> 정적인 속성을 가질 수 있음
// 클래스의 정적 속성은 클래스이름.정적속성이름 형태의 점 표기법을 사용해 값을 얻거나 설정함
// class 클래스이름 {
//     static 정적속성이름: 속성타입
// }
class A {
    static initValue = 1
}
let initValue = A.initValue 







