// 1.
function square(num) {
    return num * num;
}
// parameter: any
square(3);
square("asd");
square(true);
// 
function greet(person) {
    return "Hi, ".concat(person, "!");
}
greet("abc");
// greet(123); // --> [error] Argument of type 'number' is not assignable to parameter of type 'string'
// 2.
var doSomething = function (person, age, isFunny) {
};
doSomething("ChickenFace", 76, false);
// doSomething("ChkcineFace"); // --> [error] Expected 3 arguments, but got 1.
// 3. 파라미터에 기본값 추가하기
// 전체 Annotation 뒤에 추가.
function greet2(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi, ".concat(person, "!");
}
greet2();
greet2("Tony");
// 4. return type annotation
// Creating a function with a return type
var addNums = function (x, y) {
    return x + y;
};
addNums(5, 5); // --> 10
// return type 2개
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// arrow function
var add = function (x, y) {
    return x + y;
};
// 5. Anonymous Functions
var numbers = [1, 2, 3];
// Contextual typing on an arrow function
numbers.forEach(function (num) {
    // return num.toUppercase(); // [Error] : .toUpperCase() doesn't work for nums
});
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
    // return color.toFixed(); // [error] Property 'toFixed' does not exist on type 'string'.
});
// 6. void type
// A function that doesn't return anything
var annoyUser = function (num) {
    for (var i = 0; i < num; i++) {
        alert('Hi~~~~~');
    }
};
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return ""; // [error] : Type 'string' is not assignable to type 'void'.ts(2322)
}
// 7. never type
// A function that doesn't finish running
var neverStop = function () {
    while (true) {
        console.log("I'm still going!");
    }
};
// A function that throws an exception
var giveError = function (msg) {
    throw new Error(msg);
};
function makeError(msg) {
    throw new Error(msg);
}
function makeError2(msg) {
    // return msg; // [error] Type 'string' is not assignable to type 'never'.ts(2322)
    throw new Error(msg);
}
// 실행을 중단하지 않는 함수에서 사용
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
    // return true; // [error] Type 'boolean' is not assignable to type 'never'.ts(2322)
}
// never와 void를 비교하면 void는 엄밀히 값이다.
// void를 반환함 함수. undefined 상태로 반환됩니다.
// never : 반환할 기회를 가지면 안된다.
