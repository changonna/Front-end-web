import _ from "lodash";

export const add = (x: number, y:number) => {
    return _.add(x, y);
}

export const multiply = (x: number, y:number) => {
    return x * y;
}

export const divide = (x: number, y:number) => {
    return x / y;
}
