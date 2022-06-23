"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./person/Person"));
// export default로 지정된 Person과 export로 지정된 makePerson
const chance_1 = __importDefault(require("chance"));
// chance 패키지는 가짜 데이터를 만들어줌
const R = __importStar(require("ramda"));
// ramda는 함수형 유틸리티 패키지 
// import { 심벌 목록 } from '파일의 상대 경로'
// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = new Person('Jack')
//     console.log(jane, jack)
// }
// testMakePerson()
const chance = new chance_1.default();
let persons = R.range(0, 2).map((n) => new Person_1.default(chance.name(), chance.age()));
console.log(persons);
//# sourceMappingURL=index.js.map