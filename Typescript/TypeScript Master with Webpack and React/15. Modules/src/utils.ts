const add = (x: number, y: number) => {
    return x + y;
}

const sample = <T>(arr: T[]): T => {
    const idx = (Math.random() * arr.length);
    return arr[idx];
}

const x = 1;

export const add2 = (x: number, y: number) => {
    return x + y;
}

export const sample2 = <T>(arr: T[]): T => {
    const idx = (Math.random() * arr.length);
    return arr[idx];
}