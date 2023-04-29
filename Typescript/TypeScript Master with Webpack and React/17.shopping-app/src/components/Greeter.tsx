import React from "react";

// 기존에 사용하던 React.FC : 현재는 조금 오래되었고 권장하지 않는다.
// const Greeter: React.FC = () => {
//     return <h1>Hello!~~~~~~</h1>;
// }

// interface를 사용한
interface GreeterProps {
    person: string;
}

const Greeter = ({ person }: GreeterProps): JSX.Element => {
    return <h1>Hello, {person}</h1>;
}

export default Greeter;