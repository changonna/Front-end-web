"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2. axios 가져오기
const axios_1 = __importDefault(require("axios"));
axios_1.default; // 우클릭해서 Go to Type Definition을 클릭하면 axios의 타입선언파일을 볼 수 있다.
// 3. Axios Type 다루기
// get
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1") // 필수값 url (string) / return : Promise
    .then((res) => {
    console.log(res.data); // 파싱된 JSON
})
    .catch((e) => {
    console.log("ERROR!", e);
});
axios_1.default.get;
// get에 우클릭해서 Go to Type Definition을 클릭하면
// get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
// --> URL은 string (필수값), config의 타입은 AxiosRequestConfig
// Generic 설명: 어떤 타입(T)을 전달하면 그 타입(T)이 무엇이든 AxiosResponse 해당 타입 T가 사용된다.
// R은 T타입인 AxiosResponse와 동일하다. Promise는 R을 사용하며 이 Promise의 타입은 R이된다.
// --> 어떤 타입을 전달하든 AxiosResponse에는 그 타입이 전달된다.
// ex)
axios_1.default // <boolean> 추가.
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    const data = res.data;
    data; // [info] : const data: boolean
})
    .catch((e) => {
    console.log("ERROR!", e);
});
axios_1.default // <User> 추가.
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log("ERROR!", e);
});
const printUser = (user) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
};
// 4. 타입개별설치 (Loadsh)
// lodash 설치.
// npm install loadsh
// lodash 가져오기
const lodash_1 = __importDefault(require("lodash")); // [error]
// loadsh의 package.json에는 axios처럼 type이나 typing 필드가 없다.
// .d.ts도 .ts도 없다.
// --> lodash를 TS에서 사용하려면 
// npm install --save-dev @types/lodash 
// npm install @types/패키지명
// 임의의 요소 반환 sample()
lodash_1.default.sample(undefined);
