"use strict";
// 1. Generic
// 타입을 주면 같은 타입을 반환한다.
// const doThing = (thing: number | string): number | string {
// }
// ex
// const nums: number[] = [];
const nums = [];
// Array<T> : 특수 타입
// interface Array<T>
// Array라는 인터페이스 정의에서 T는 Type을 가리킵니다.
const colors = [];
// 2. 빌트인 제네릭의 다른 예시
// [info] const inputEl: Element | null 
// : querySelector는 기본 Element를 가져오거나 Element를 못 찾을 경우 null을 반환할 뿐이다.
let inputEl = document.querySelector("#username");
console.log(inputEl);
console.dir(inputEl);
// inputEl: Element | null 이기 때문에 error 발생
inputEl.value = "Hacked!"; // [error] : Property 'value' does not exist on type 'Element'.ts(2339)
// [info] const inputEl2: HTMLInputElement
const inputEl2 = document.querySelector("#username");
inputEl2.value = "Hacked!";
// [info] : const btn: HTMLButtonElement | null
const btn = document.querySelector(".btn");
// 어떤 타입을 지정하면 그 타입의 요소를 반환해줍니다.
// input 타입을 지정할 때, output 타입을 예상할 수 있다.
// 3. 첫번째 제네릭 작성하기
const numberIdentity = (item) => {
    return item;
};
const stringIdentity = (item) => {
    return item;
};
const booleanIdentity = (item) => {
    return item;
};
/* Bad */
// const identity = (item: any): any => {
//     return item;
// }
/* Good */
// 함수의 파라미터와 반환값이 같다.
// 1. 
const identity = (item) => {
    return item;
};
// 2.
// function identity<Type>(item: Type): Type {
//     return item;
// }
identity(7);
identity("7");
identity(true);
// [info] const identity: <Cat>(item: Cat) => Cat
identity({
    name: "a",
    breed: "b"
});
// 핵심은 이 identity 함수가 여러 타입을 받도록 사용자가 지정한다.
// 4. 다른 제네릭 함수 작성하기
// parameter에 array받는 함수
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
console.log(getRandomElement([1, 2, 3]));
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([true, false, true]));
// 5. 추론된 제네릭 타입 파라미터
getRandomElement(["a", "b", "asd"]); // [info] const getRandomElement: <string>(list: string[]) => string
// 단축구문 : <Generic> 생략 가능
getRandomElement(["a", "b", "asd"]); // [info] const getRandomElement: <string>(list: string[]) => string
// 6. 제네릭, 화살표 함수 및 tsx파일
// tsx파일 : TypeScript를 사용할 수 있는 jsx 파일
/*
    jsx에서는 항상 홑화살괄호를 사용해야 한다. <>
    제네릭에도 <>를 쓰니까 헷갈릴 수 있다.
*/
// tsx파일에서 generic을 사용할 때는 <T뒤에 ,(후행쉼표)를 붙여서 사용해야한다.
const getRandomElement2 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
// 7. 여러 타입을 가진 Generic
// [info] : const merge: <T, U>(object1: T, object2: U) => T & U
const merge = (object1, object2) => {
    return Object.assign(Object.assign({}, object1), object2);
};
// [info] : 교차타입 const comobObj: { name: string; } & { pets: string[]; }
const comobObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// 8. 타입 제한 추가하기
// 타입 파라미터의 타입을 제한
console.log(merge({ name: "colt" }, 9));
// --> {name: 'colt'}
// 객체가 아닌 9가 객체가 되므로 출력되지 않는다.
// extends object 추가 : 항상 T,U는 object여야 한다.
const merge2 = (object1, object2) => {
    return Object.assign(Object.assign({}, object1), object2);
};
console.log(merge2({ name: "colt" }, 9)); // [error] : Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)
const printDoubleLength = (thing) => {
    return thing.length * 2;
};
printDoubleLength("abc");
printDoubleLength(123); // [error]: Argument of type 'number' is not assignable to parameter of type 'Lengthy'.ts(2345)
// 9. 기본 타입 파라미터
const btn2 = document.querySelector(".btn");
const makeEmptyArray = () => {
    return [];
};
// 기본값은 타입 파라미터를 특정하지 않을 때만 개입하게 됩니다.
// [info] : const numbers: number[]
const numbers = makeEmptyArray();
// [info] : const bools: boolean[]
const bools = makeEmptyArray();
class VideoPlayList {
    constructor() {
        this.videos = [];
    }
}
class SongPlayList {
    constructor() {
        this.songs = [];
    }
}
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
songs.add({
    title: 'a',
    artist: 'b'
});
const videos = new PlayList();
videos.add({
    title: 'c',
    creator: 'd',
    resolution: 'e'
});
