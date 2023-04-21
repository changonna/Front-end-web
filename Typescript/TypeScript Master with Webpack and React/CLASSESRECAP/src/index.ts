// 1. TypeScript에서 Class Anotation 처리하기
// 2. Class Fields
// 3. readonly Class Property
// 4. public
// 5. private
// 6. parameter property 단축 구문
// 7. getter, setter
// 8. protected
// 9. class and interface
// 10. Abstract Class


// class Player {
//     // 프로퍼티 type 설정
//     public readonly first: string; // readonly
//     public readonly last: string;
//     private score: number = 0; // private

//     // parameter에 type 설정
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }

//     // private method
//     private secretMethod(): void {
//         console.log("SECRET METHOD!!");
//     }
// }

// const elton = new Player("Elton", "Steele");


// elton.secretMethod();




class Player {
    // 파라미터 프로퍼티 단축 구문
    constructor(
        public first: string,
        public last: string,
        private _score: number,
        protected _protect: number
    ) { }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    // getter
    get score(): number {
        return this._score;
    }
    // setter
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}

const elton = new Player("Elton", "Steele", 200, 300);

elton.fullName;

elton.score = 123;



class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    maxScore() {              // 상속받은 클래스에서
        // this._score = 9999999; // [error] private는 접근 불가능
        this._protect = 9999999; // [success] protected는 접근 가능
    }
}


interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(
        public color: string
    ) { }
}

class Jacket implements Colorful, Printable {
    constructor(
        public brand: string,
        public color: string
    ) { }

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");








// abstract class
// 1. 이 자체로는 더 이상 새 클리스를 만들 수 없다.
// 패턴을 정의하고 자식 클래스에서 시행되야 하는 메서드를 정의하는데 사용된다.
abstract class Employee {
    constructor(
        public first: string,
        public last: string
    ) { }

    // abstract method : 상속받는 클래스에서 꼭 사용하라고 명시
    abstract getPay(): number;

    greet() {
        console.log("HELLO!");
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay() {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string, 
        private hourlyRate: number, 
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());


