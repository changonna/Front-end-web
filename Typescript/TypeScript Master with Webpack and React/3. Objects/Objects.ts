// 1. Objects
function printName(person: { first: string; last: string }): void { // 함수에 대한 파라미터 타입 애너테이션을 작성해 객체가 되게
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });





// 2. Objects+
let coordinate:{x: number, y: number} = { x: 34, y: 2 }; // 객체 타입을 사용하는 변수

function randomCoordinate(): {x: number, y: number} { // 객체 리터럴 형태의 반환 타입 애너테이션을 가지는 경우
    return {x: Math.random(), y: Math.random()};
}





// 3. Exceeded Properties
// printName({first: "Mick", last: "Jagger", age: 15}) // [error] 객체 리터럴(Object literal)은 알려진 프로퍼티만 지정할 수 있고
// age는 이 타입에 존재하지 않는다.

const singer = {first:"Mick", last:"Jagger", age: 473, isAlive: true}; // [success]
printName(singer);

// --> 객체 리터럴을 전달하면 오류가 나지만
// --> 별도의 변수로 정의하는 과정을 거치면 지정된 프로퍼티 외에는 무시하게 된다.





// 4. Type Alias
// 타입을 재사용하고 이름을 지정하는 방법
// 여러 프로퍼티를 가지는 객체 타입 같은 복잡한 타입에서 사용

// A type alias!
type Point = {
    x: number;
    y: number;
}

let coordinate2: Point = { x: 34, y: 2 }; // 객체 타입을 사용하는 변수

function randomCoordinate2(): Point { // 객체 리터럴 형태의 반환 타입 애너테이션을 가지는 경우
    return {x: Math.random(), y: Math.random()};
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}


// 원시 타입도 만들 수 있다.
type MyNum = number;
let age: MyNum = 123;




type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    }
}

// 5. Nested Objects 
function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);

 



// 6. Selective Properties
type Point2 = {
    x: number;
    y: number;
    z?: number; // ? 선택적 프로퍼티
}

const myPoint: Point2 = {x: 1, y: 3};




// 7. readonly
type User = {
    readonly id: number;
    userName: string;
}

const user: User = {
    id: 123,
    userName: "changon"
}

console.log(user.id);
// user.id = 23 // [error] Cannot assign to 'id' because it is a read-only property.ts(2540)






// 교차 타입 (intersection type)
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// &
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow'
}



type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}
// 교차 타입 이외의 타입 추가
type CatDog = Cat &
  Dog & {
    age: Number;
  };

const cristy: CatDog = {
    numLives: 15,
    breed: 'Husky',
    age: 15
}


