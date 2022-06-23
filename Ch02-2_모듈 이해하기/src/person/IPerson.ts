export default interface IPerson {
    name: string
    age: number
}

// export default 키워드는 한 모듈이 내보내는 기능 중 한 개에만 붙일 수 있음
// export default가 붙은 기능은 import 문으로 불러올 때 중괄호 없이 사용할 수 있음