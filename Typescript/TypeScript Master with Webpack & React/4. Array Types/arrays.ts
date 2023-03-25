// 1. Array Types

// 변수 뒤에 타입을 배열로 설정

// Using Brackets:
// string array
let names: string[] = ["hello", "world"];
// number array
let ages: number[] = [24, 32, 19, 29];




let activeUsers: [] = []; // 비어있는 배열
activeUsers.push("steven"); // [error] Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)

let activeUsers2: string[] = [];
activeUsers2.push("steven"); // [success]

const ageList: number[] = [1, 2, 3, 4];
ageList[0] = 99;
ageList[0] = "asd"; // [error]





// 2. Array Types++

// An alternate syntax:
// string array
let names2: Array<string> = ["hello", "world"];
// number array
let ages2: Array<number> = [24, 32, 19, 29];


const bools: Array<boolean> = [];
const bools2: boolean[] = [];


// custom type
type Point = {
    x: number;
    y: number;
}

const coords: Point[] = [];

coords.push( {x: 23, y: 35} );
coords.push( {x: 23, y: "35"} ); // [error]



// 3.  (다차원 배열)

const board: string[][] = [
    ["x", "o", "x"],
    ["x", "o", "x"],
    ["x", "o", "x"]
];

const demo: number[][][] = [[[1]]];