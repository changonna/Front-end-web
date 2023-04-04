// A Recap of JS Classes

// 클래스
class Player {
    // static : 프로퍼티나 메소드가 개별 인스턴스가 아닌 클래스 자체에 속한다.
    // static fields 
    static description = "Player In Our Game";

    // class fileds
    #score = 0;
    // #으로 시작하면 private
    #numLives = 10;
    // constructors
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }

    // static method : 특정 인스턴스와 관련 없으면서 클래스 자체와 연관된 기능을 클래스로 그룹화 할 수 있게 됩니다.
    // : 주로 생성 메서드 혹은 새로운 인스턴스나 여러 인스턴스를 생성하는 헬퍼를 예로 들 수 있습니다.
    static randomPlayer() {
        return new Player("Andy", "Samberg");
    }

    // getter
    get score() {
        return this.#score;
    }
    // setter
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        }
        this.#score = newScore;
    }

    // getter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    // setter
    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }



    getScore() {
        return this.#score; // private은 이런식으로 접근 가능.
    }
    updateScore(newScore) {
        this.#score = newScore;
    }

    // method
    taunt() {
        console.log("BOOYAH!");
    }
    loseLife() {
        this.numLives -= 1;
    }
    // private method
    #secret() {
        console.log("SECRET!!!");
    }
}

const player1 = new Player("blue", "steele");
player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.getScore());
// console.log(player1.updateScore(22));
// console.log(player1.getScore());

// console.log(player1.fullName);
// console.log(player1.score);
// // player1.score = -25;
// player1.score = 25;
// console.log(player1.score);

// console.log(player1.fullName);
// player1.fullName = "Amy Admas";
// console.log(player1.fullName);


// const player2 = new Player("charlie", "brown");
// player2.taunt();



// private # fileds




// static : 해당 프로퍼티나 메서드가 클래스 자체에 존재하며
// 개별 인스턴스에는 없다고 알려준다.


// extends
class AdminPlayer extends Player {
    isAdmin = true;
    constructor(first, last, powers) {
        // super : super Class에 있는 constructor() 함수를 참조. 
        super(first, last);
        this.powers = powers;
    }
    
}
 
const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore world"]);
