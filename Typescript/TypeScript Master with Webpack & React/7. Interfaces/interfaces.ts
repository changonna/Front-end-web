// 1. Interface

// Type
type Point2 = {
    name: string;
    age: number;
}

// An interface! // type과 다르게 = 부등호 표시가 없다.
interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 123, y: 345};


// 2. readonly와 선택적 Interface Property
interface Person {
    readonly id: number;
    first: string,
    last: string,
    nickname?: string
}

const thomas: Person = {
    id: 211,
    first: "Thomas",
    last: "Hardy"
}


// 3. Interface Method
interface Personn {
    readonly id: number;
    first: string,
    last: string,
    nickname?: string;
    // sayHi: (name: string) => string;  // --> errow function
    sayHi(name: string): string; // --> property 이름 뒤에 바로 괄호로 메소드인것을 표시.
}

const thomas2: Personn = {
    id: 211,
    first: "Thomas",
    last: "Hardy",
    sayHi: (name) => {
        return "Hello";
    }
}



// 4. Interface Method Parameter
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));




// 5. 인터페이스 다시 열기

interface Dog {
    name: string;
    age: number;
}

// interface 다시 열어서 확장
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shephred",
    bark() {
        return "WOOF WOOF!";
    }
}



// 6. (인터페이스 확장)
// extends Class와 같이

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "bomb"
}

// 7. 인터페이스 다중 상속
interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string   
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
}


// 8. Types vs Interfaces

// 모든 종류의 타입 별칭을 인터페이스로 대체할 수 없다.

/*
1. interface는 객체 형태 묘사에만 사용이 됩니다. 타입이 여러 개일 경우에는 사용할 수 없다.
type은 어떤 타입이든지 묘사가 가능합니다.
*/
type Name1 = {
    name: string;
}

interface Name2 {
    name: string;
}

/*
2. interface는 이미 생성한 interface를 다시 열어서 내용을 추가하는 것이 가능. 
type은 불가능 
*/
type Name1 = { // [error] Duplicate identifier 'Name1'.
    age: number;
}

interface Name2 {
    age: number;
}


/*
3. 프로퍼티의 확장, 즉 다른 인터페이스를 상속하는 경우에는 extends를 사용 객체를 기반으로 한 접근법 (like Class)
type별칭을 사용할 때는 &를 이용한 교차타입을 사용해야 한다.
*/
type Person1 = Name1 & {
    age: number;
}

interface Person2 extends Name2 {
    age: number;
}





const person1: Person1 = {
    name: "Jerry",
    age: 42
}

const person2: Person2 = {
    name: "Jerry",
    age: 42
}