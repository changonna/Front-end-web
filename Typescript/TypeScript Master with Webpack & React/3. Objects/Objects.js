// 1. Objects
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// 2. Objects+
var coordinate = { x: 34, y: 2 }; // 객체 타입을 사용하는 변수
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// 3. Exceeded Properties
// printName({first: "Mick", last: "Jagger", age: 15}) // [error] 객체 리터럴(Object literal)은 알려진 프로퍼티만 지정할 수 있고
// age는 이 타입에 존재하지 않는다.
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true }; // [success]
printName(singer);
var coordinate2 = { x: 34, y: 2 }; // 객체 타입을 사용하는 변수
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 123;
// 5. Nested Objects 
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
var myPoint = { x: 1, y: 3 };
var user = {
    id: 123,
    userName: "changon"
};
console.log(user.id);
var happyFace = {
    radius: 4,
    color: 'yellow'
};
var cristy = {
    numLives: 15,
    breed: 'Husky',
    age: 15
};
