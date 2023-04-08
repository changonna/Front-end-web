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




// 4. In Operator Narrowing (In 연산자로 좁히기)
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

const getRuntime = (media: Movie | TVShow) => {
    // interface의 property로 찾는다
    if("numEpisodes" in media) {
        // [info] (parameter) media: TVShow
        return media.numEpisodes * media.episodeDuration;
    } else {
        // [info] (parameter) media: Movie
        return media.duration;
    }
}

getRuntime({ title: "Amadeus", duration: 140 });
getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 });




// 5. Instanceof Narrowing
// 특정 클래스의 인스턴스에 값이 존재하는지 등을 확인할 수 있다.
const printFullDate = (date: string | Date) => {
    if(date instanceof Date) {
        // [info] (parameter) date: Date
        console.log(date.toUTCString());
    } else { 
        // [info] (parameter) date: string
        console.log(new Date(date).toUTCString());
    }
}

// class
class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

const printName = (entity: User | Company) => {
    if(entity instanceof User) {
        // [info] (parameter) entity: User
        entity
    } else {
        // [info] (parameter) entity: Company
        entity
    }
}



// 6. Type Predicate (타입 명제 다루기)
// 타입 명제의 근본적인 기능 : 함수를 정의하는 것 ex) isUser, isCat 등의 isXXX
interface Cat {
    name: string;
    numLives: number;
}
interface Dog {
    name: string;
    breed: string;
}

// Type Predicate는 함수이기 때문에 재사용이 가능하다.
// 1. 항상 함수의 타입으로 작성되어야 한다.
// 2. 반환하는 값 타입 : animal이 Cat이라고 알려주어야 한다. (animal is Cat)
const isCat = (animal: Cat | Dog): animal is Cat => {
    // animal을 Cat이라고 단정짓고 numLives가 있으면 true 없으면 false 반환한다.
    return (animal as Cat).numLives !== undefined;
}

const makeNoise = (animal: Cat | Dog): string => {
    if(isCat(animal)) {
        animal // [info] (parameter) animal: Cat
        return "Meow";
    } else {
        animal // [info] (parameter) animal: Dog
        return "Bark";
    }
}




// 7. Discriminated Unions (판별 유니온)
// 모든 타입의 공통된 프로퍼티에 판별자를 추가하여 구분한다. ex(kind, type, __type, type_name 등)
interface Rooseter {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}
interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}
interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}
type FarmAnimal = Pig | Rooseter | Cow;

const getFarmAnimalSound = (animal: FarmAnimal) {
    switch(animal.kind) {
        case "rooster": 
            return "Cockadoodledoo!";
        case "cow":
            return "Moooo!";
        case "pig":
            return "Oink";
    }
}

const stevie: Rooseter = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}
console.log(getFarmAnimalSound(stevie));





// 8. Exhaustiveness check and Never(소진 검사와 never)

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal2 = Pig | Rooseter | Cow | Sheep;

const getFarmAnimalSound2 = (animal: FarmAnimal2) {
    switch(animal.kind) {
        case "rooster": 
            return "Cockadoodledoo!";
        case "cow":
            return "Moooo!";
        case "pig":
            return "Oink";
        // case "sheep":
        //     return "Baaa";
        default:
            // We should never make it here, if we handled all cases correctly
            const _exhaustiveCheck: never = animal; // [error] Type 'Sheep' is not assignable to type 'never'.
            return _exhaustiveCheck;
    }
}