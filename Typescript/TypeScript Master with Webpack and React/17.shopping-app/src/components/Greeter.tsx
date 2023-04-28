import React from "react";

const Greeter = (): JSX.Element => {
    return <h1>Hello!</h1>;
}

// 기존에 사용하던 React.FC : 현재는 조금 오래되었고 권장하지 않는다.
// const Greeter: React.FC = () => {
//     return <h1>Hello!~~~~~~</h1>;
// }

export default Greeter;