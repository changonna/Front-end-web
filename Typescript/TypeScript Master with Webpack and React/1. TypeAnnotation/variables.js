/* string */
var movieTitle = "Amadeus";
movieTitle = "Arriaval";
movieTitle = 9; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
movieTitle.upper(); // 'string' 형식에는 'upper'속성이 없습니다.
/* number */
var numCatLives = 9;
numCatLives += 1;
numCatLives = 'zero'; // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
/* boolean */
var gameOver = false;
gameOver = true;
gameOver = "true"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
// 타입 추론 (Type Inference)
var tvShow = "Olive Kitteridge"; // let tvShow: string
tvShow = "The Other Two";
tvShow = false; // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
var isFunny = false; // let isFunny: boolean
isFunny = true;
isFunny = "asd"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
// the Any Type
var thing = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
// 지연된 초기화 및 암묵적 Any
// 초기화와 별도로 변수를 선언하는 경우에 사용
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// 선언
var foundMovie; // let foundMovie: any
// 'foundMovie' 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.
// --> let foundMovie: string;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
// TypeScript는 오류를 잡지 못한다.
foundMovie();
foundMovie = 1;
foundMovie.asdf;
// 1. tsc 명령어 사용법
// 2. .ts를 컴파일하면 .js가 생성
// compile 되면서 js에서 Anotation(: string)은 빠진다.
// 오류가 있어도 .js로 컴파일링하는걸 중지시키지 않는다.
// TypeScript를 JavaScript 평문으로 바꾸고
// 이를 원하는 Node나 브라우저에서
// 실행해서 잘 동작되는게 TypeScript의 목적
