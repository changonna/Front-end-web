// Type Narrowing (타입 좁히기)
// 명확하지 않은 타입이 있을때 사용하는것
// 유니온 타입이라고하며 이를 보다 명확하게 좁히는 것

// 1. Typeof Guards
const triple = (value: number | string) => {
    if(typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}

console.log(triple(3));
console.log(triple('hi'));

// 2. Truthiness Guards
const el = document.getElementById("#idk");

// [info] const el: HTMLElement | null
if(el) {
    el // [info] const el: HTMLElement
} else {
    el // [info] const el: null

}

const printLetters = (word?: string) => {
    // [info] (parameter) word: string | undefined
    if(word) {
        for(let char of word) { // [info] (parameter) word: string
            console.log(char);
        }
    } else {
        word // [info] (parameter) word: string | undefined
        console.log("you did not pass in a word!");
    }
}



// 3. Equality Narrowing (동등 좁히기)
const someDemo = (x: string | number, y: string | boolean) => {
    if(x === y) {
        x // [info] (parameter) x: string
        y // [info] (parameter) y: string
    }
}

someDemo(3, "3");




// 4. in Operator Narrowing (In 연산자로 좁히기)

