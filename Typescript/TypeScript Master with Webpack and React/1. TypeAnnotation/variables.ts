/* string */
let movieTitle: string = "Amadeus";
movieTitle = "Arriaval";
movieTitle = 9; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
movieTitle.upper(); // 'string' 형식에는 'upper'속성이 없습니다.


/* number */
let numCatLives: number = 9;
numCatLives += 1;
numCatLives = 'zero'; // 'string' 형식은 'number' 형식에 할당할 수 없습니다.


/* boolean */
let gameOver: boolean = false;
gameOver = true;
gameOver = "true"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.



// 타입 추론 (Type Inference)
let tvShow = "Olive Kitteridge"; // let tvShow: string
tvShow = "The Other Two";
tvShow = false; // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.

let isFunny = false; // let isFunny: boolean
isFunny = true;
isFunny = "asd"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.





// the Any Type
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();




// 지연된 초기화 및 암묵적 Any
// 초기화와 별도로 변수를 선언하는 경우에 사용
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

// 선언
let foundMovie; // let foundMovie: any
// 'foundMovie' 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.

// --> let foundMovie: string;

for(let movie of movies) {
    if(movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

// TypeScript는 오류를 잡지 못한다.
foundMovie();
foundMovie = 1;
foundMovie.asdf;