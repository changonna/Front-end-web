/** 1
 * 
 * 
 * 터미널 2개를 켠다
 * 1개는 tsc -w : ts 변경 감지
 * 1개는 npm start
 * 
 * 
 * TS에서의 document의 type이 document이다.
 * 
 * 
 */






/** 2
 * tsconfig.json 파일의 compilerOptions 설정
 * target : Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
 * lib : Specify a set of bundled library declaration files that describe the target runtime environment.
 * 
 * 참고 : https://www.typescriptlang.org/tsconfig
 */



const btn = document.getElementById("btn"); // [info] const btn: HTMLElement | null
console.log(btn);
console.dir(btn); // [[Prototype]]:HTMLButtonElement  JS는 객체가 프로토타입 체인에 있다


// ?. --> btn이 존재하지 않으면 이벤트 리스너가 작동하지 않는다.
btn?.addEventListener("click", () => {
    // alert("clicked");
});


// !  Non-Null : 값이 확실하게 존재하고 null이 아닐 때만 사용합니다.
// --> 불확실한 런타입에서 작업할때는 절대로 이 방법을 쓰지 말아야 합니다. 
const button = document.getElementById("btn")!;
// --> 느낌표를 써서, 값이 존재하며 null이 아니라고 하면 됩니다.
button.addEventListener("click", () => {
    // alert("clicked");
}); // --> ?는 제거해도 된다.




// Type Assertion (타입 단언)
// : TypeScript에 선언하는 것. 내가 더 많이 알고 있고 이 값을 다른 타입으로 취급하라고
// 우리보다 많은 정보가 없는 상황에 쓸 수 있다.
let mystery: unknown = "Hello World";
// const numChars = mystery.length; // [error] 'mystery' is of type 'unknown'
const numChars = (mystery as string).length;


// --> 실제로는 이렇게 잘 안씁니다.
// 어떤 타입인지 알 때 문자열로 추론하는 TypeScript에 알려주는 용도이다.



// DOM으로 Type단언하기
// 타입 단언이 필요한 사례 연습하기
let input = document.getElementById("todoinput")!; // [info] const input: HTMLElement
// --> TS는 input인지 button인지 모른다
// input.value // [error] Property 'value' does not exist on type 'HTMLElement'.ts(2339)



// 타입 단언 as 추가.
const button2 = document.getElementById("btn")! as HTMLButtonElement;
const input2 = document.getElementById("todoinput")! as HTMLInputElement; 
button2.addEventListener("click", () => {
    alert(input2.value);
    input2.value = "";
});









// to-do list 만들기
