// 2. 모듈없이 작업하기
/*
 * Non-modules
 * : 변수와 타입은 공유 전역 스코프 내부에 있다고 선언됩니다.
 */
// utils.ts에 선언한 아래 함수들 사용 가능
// sample([12, 3, 34]);
// add(1, 2);
// 3. TypeScript 모듈 이용하기
// export 또는 await 키워드가 있으면 Module로 인식된다.
// import {변수명} from "경로/파일.js"
import { add2, sample2 } from "./utils.js";
console.log(add2(1, 2));
sample2([12, 3, 34]);
// 4. Compile Module System 변경하기
/* 브라우저 내 JS에서는 CommonJS 모듈을 이해하지 못해서
    index.js의
   exports 키워드가 뭔지 모르고 모듈, require도 모른다. */
// 그래서 TS에서 Module 사용을 안하고 index.html에서 <script>로 추가한다.
// 이 모듈을 컴파일하려는 JS 코드에 사용하기
// tsconfig.json에서
// "module": "commonjs",를
