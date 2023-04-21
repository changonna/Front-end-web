// 1. Interface
var pt = { x: 123, y: 345 };
var thomas = {
    id: 211,
    first: "Thomas",
    last: "Hardy"
};
var thomas2 = {
    id: 211,
    first: "Thomas",
    last: "Hardy",
    sayHi: function (name) {
        return "Hello";
    }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shephred",
    bark: function () {
        return "WOOF WOOF!";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark: function () {
        return "Bark!";
    },
    job: "bomb"
};
var pierre = {
    name: "Pierre",
    id: 123,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
};
var person1 = {
    name: "Jerry",
    age: 42
};
var person2 = {
    name: "Jerry",
    age: 42
};
