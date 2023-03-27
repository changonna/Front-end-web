// 1. Tuples
// 개념은 본질적으로 배열 타입이지만 고정된 길이를 갖는 배열이며
// 고정된 타입 세트로 순서가 정렬됩니다.

// Tuple : 길이와 타입이 고정.
let myTuple: [number, string];
myTuple = [10, 'Typescript is fun!'];



// 기존의 배열
const stuff: (string | number)[] = ['asd', 'asdasd', 'asdasd', 2];





// 2. Tuples++
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
const badRes: HTTPResponse = [404, "Not Found"];

// 튜플은 생성 후에 추가 요소를 push하는 것을 막지 않는다.
goodRes.push(123);
goodRes.pop();


// 튜플 배열 타입
const response: HTTPResponse[] = [
    [404, "Not Found"],
    [200, "OK"]
];


// RGB 색상을 구성하는 세개의 숫자처럼 --> 튜플을 사용하면 좋다.
let rgb: [number, number, number] = [255, 0, 45];

// httpResponse 같은 경우는 Object를 사용하는게 더 좋다. 
const httpResponse = {
    code: 200,
    msg: "OK"
}




// 3. Enums
// enum을 사용하면 명명된 상수 집합을 정의할 수 있습니다.
// 반복적으로 참조하는 값의 집합이 있을 경우에 사용합니다.

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);




// 4. Enums++

// enum을 string으로 저장하기
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
    // ERROR = 23 // --> string 사이에 숫자도 가능.
}

ArrowKeys.LEFT;


// 한 묶음의 enum을 지정하면
// 계속해서 참조가 가능하고 편리하게 자동완성기능도 사용가능하다.




// 5. Background에서의 Enum
