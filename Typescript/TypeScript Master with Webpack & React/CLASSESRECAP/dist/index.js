"use strict";
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
    constructor(first, last, _score, _protect) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this._protect = _protect;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    // getter
    get score() {
        return this._score;
    }
    // setter
    set score(newScore) {
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
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        // this._score = 9999999; // [error] private는 접근 불가능
        this._protect = 9999999; // [success] protected는 접근 가능
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// abstract class
// 1. 이 자체로는 더 이상 새 클리스를 만들 수 없다.
// 패턴을 정의하고 자식 클래스에서 시행되야 하는 메서드를 정의하는데 사용된다.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
