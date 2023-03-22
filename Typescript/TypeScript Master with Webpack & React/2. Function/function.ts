// 1.
function square(num) { // --> [info] num: any
    return num * num;
}

// parameter: any
square(3);
square("asd");
square(true);


// 
function greet(person: string) {
    return `Hi, ${person}!`;
}
greet("abc");
// greet(123); // --> [error] Argument of type 'number' is not assignable to parameter of type 'string'




// 2.
const doSomething = (person: string, age: number, isFunny: boolean) => {

};

doSomething("ChickenFace", 76, false);
// doSomething("ChkcineFace"); // --> [error] Expected 3 arguments, but got 1.






// 3. 파라미터에 기본값 추가하기
// 전체 Annotation 뒤에 추가.
function greet2(person: string = "stranger") {
    return `Hi, ${person}!`;
}
greet2();
greet2("Tony");




// 4. return type annotation
// Creating a function with a return type
const addNums = (x: number, y: number): number => {
    return x + y;
}

addNums(5,5); // --> 10


// return type 2개
function rando(num: number): string | number {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// arrow function
const add = (x: number, y: number): number => {
    return x + y;
}



// 5. Anonymous Functions
const numbers = [1, 2, 3];

// Contextual typing on an arrow function
numbers.forEach(num => {
    // return num.toUppercase(); // [Error] : .toUpperCase() doesn't work for nums
})



const colors = ["red", "orange", "yellow"];
colors.map(color => { // [info] color: string
    return color.toUpperCase();
    // return color.toFixed(); // [error] Property 'toFixed' does not exist on type 'string'.
});


   
// 6. void type
// A function that doesn't return anything
const annoyUser = (num: number): void => {
    for(let i = 0; i< num; i++) {
        alert('Hi~~~~~');
    }
}


function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
    // return ""; // [error] : Type 'string' is not assignable to type 'void'.ts(2322)
}




// 7. never type
// A function that doesn't finish running
const neverStop = (): never => {
    while(true) {
        console.log("I'm still going!");
    }
}

// A function that throws an exception
const giveError = (msg: string) => {
    throw new Error(msg);
}


function makeError(msg: string) { // [info] return void
    throw new Error(msg);
}

function makeError2(msg: string): never { // [info] return never
    // return msg; // [error] Type 'string' is not assignable to type 'never'.ts(2322)
    throw new Error(msg);
}

// 실행을 중단하지 않는 함수에서 사용
function gameLoop(): never {
    while(true) {
        console.log("GAME LOOP RUNNING!");
    }
    // return true; // [error] Type 'boolean' is not assignable to type 'never'.ts(2322)
}


// never와 void를 비교하면 void는 엄밀히 값이다.
// void를 반환함 함수. undefined 상태로 반환됩니다.
// never : 반환할 기회를 가지면 안된다.