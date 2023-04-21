// 참고 : https://webpack.js.org/guides/typescript/ 의 webpack.config.js

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
    // 설정이 들어갈 부분
    // 0. mode 설정
    mode: "production",
    // 1. entry point: Webpack에게 번들링을 시작할 애플리케이션 시작지점을 지정
    entry: "./src/index.ts",
    // devtool 추가
    devtool: "inline-source-map",
    // devServer 추가
    devServer: {
        // port: 8080, // port: 개발 서버 포트 번호를 설정한다. 기본 값은 8080
        // hot: true, // 핫 리로딩: 수정된 부분만 새로고침, 에러 발생시에도 바로 콘솔에 표시
        // devMiddleware: { publicPath: "/dist/" }, // webpack middleware는 이미 존재하는 express서버에 webpack에서 컴파일한 파일을 전달해준다.
        static: { directory: path.resolve(__dirname) } // static.directory: 정적 파일을 제공할 경로이다. 기본 값은 웹팩의 아웃풋이다.
    },
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
        filename: "[contenthash]bundle.js", // bundle.js이라는 파일을 생성하고
        path: path.resolve(__dirname, "dist"), // dist폴더 안에 넣으라고 지시하는 것
        publicPath: "/dist" // publicPath 추가
    },
    plugins: [new CleanWebpackPlugin()], // plugin 추가
}