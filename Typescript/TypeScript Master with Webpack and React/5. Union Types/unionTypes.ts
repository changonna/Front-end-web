// 1. Union Type

// 유니온 타입을 이용해 숫자 또는 문자열로 선언하거나
// 특정 함수가 두 가지 타입을 모두 취하도록 선언

// 여러 타입을 가질 수 있다.

let age: number | string = 21;
age = "21"; // [success]




type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34}; // type : Point
coordinates = {lat: 321.213, long: 23.334}; // type : Loc





// 2. Unions - Narrowing the Type (Union Type으로 타입 좁히기)
const isTeenager = (age: number | string) => {
    if(typeof age === "string") {
        // If age is a string, do this
        console.log(age.charAt(0) === "1");
    }
    if(typeof age === "number") {
        // If age is a number, do this
        console.log(age > 12 && age < 20);
    }
}
isTeenager('20') // false
isTeenager(13); // true



function calculateTax(price: number | string, tax: number) {
    // type Narrowing
    if(typeof price === "string") {
        price = parseFloat(price.replace("$", "")); // (parameter) price: string
    }
    return price * tax;
}




// 3. Union Type, Array Type
// (number + string)의 배열
let stuff: (number | string)[] = [1, 2, "a"]; // [success] : 

const stuff2: number[] | string[] = [1, 2, "a"]; // [error] : 배열이 문자만이거나 숫자만이어야 한다.


const coords: (Point | Loc)[] = [];
coords.push( {lat: 321.213, long: 23.334} ); // type : Loc
coords.push( {x: 213, y: 123 }); // type : Point



// 4. Literal Types

// 유니온 타입을 활용해서 사용할 수 있는 리터럴 값을 파이프 기호(|) 를 사용하여 연결할 수 있다.

// 유니온 타입과 연관은 없지만 같이 사용하는 경우가 많다.
let zero: 0 = 0;
zero = 2; // [error] : Type '2' is not assignable to type '0'.ts(2322)

let hi: "hi" = "hi";
hi = "HI"; // [error] : Type '"HI"' is not assignable to type '"hi"'.ts(2322)


let mood: "Happy" |  "Sad" = "Happy";
mood = "Sad";
mood = "Angry"; // [error]


type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday";
today = "weds"; // [error]

