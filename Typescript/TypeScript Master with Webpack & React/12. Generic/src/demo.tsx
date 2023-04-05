// tsx파일에서 generic을 사용할 때는 <T뒤에 ,(후행쉼표)를 붙여서 사용해야한다.
const getRandomElement = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length);

    return list[randIdx];
}