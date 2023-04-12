// 참고 : https://webpack.js.org/guides/typescript/ 의 webpack.config.js

const path = require("path");

module.exports = {
    // 설정이 들어갈 부분
    // 0. mode 설정
    mode: "development",
    // 1. entry point: Webpack에게 번들링을 시작할 애플리케이션 시작지점을 지정
    entry: "./src/index.ts",
    // 2. module
    module: {
        // rules: 규칙 추가
        rules: [
            {
                test: /\.tsx?$/, // .ts, .tsx
                use: "ts-loader", // 무엇을 사용할지
                exclude: /node_modules/ 
            },
        ],
    },
    // 3. resolve: 
    resolve: {
        // extension: Webpack이 resolve할 수 있는 확장자의 리스트
        extensions: [".tsx", ".ts", ".js"],
    },
    // 4. output: Webpack으로 생성하려는 출력
    output: {
        filename: "bundle.js", // bundle.js이라는 파일을 생성하고
        path: path.resolve(__dirname, "dist"), // dist폴더 안에 넣으라고 지시하는 것
    }
}