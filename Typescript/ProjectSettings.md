1. 빈 폴더 생성

2. terminal1 켜고 
    
    ```bash
    tsc --init 실행 
    // ==> tsconfig.json 파일 생성됨
    ```
    
    ==> tsconfig.json 파일 생성됨
    
3. dist, src 폴더 생성

4. src폴더안에 index.ts 생성

5. tsconfig.json 수정.
    
    ```json
    "outDir": "./dist",
    "include": ["src"]
    ```
    
6. terminal1 감시모드 켜기(ts 저장시 js 자동 변환)
    
    ```bash
    tsc -w
    ```
    
7. index.html 생성
index.js 스크립트 추가

8. package.json 생성
    
    ```bash
    npm init -y 
    ```
    
9. package.json의 name 소문자로 수정
    ```json
    // "name": "typeScriptMiniProject",
    "name": "typescriptminiproject",
    ```
    
10. lite-server 설치
npm install lite-server => package.json의 dependencies lite-server 추가.
    
    ```bash
    npm install lite-server
    ```
    
    —> package.json의 dependencies lite-server 추가 확인.
    
11. package.json의 script 수정
    
    ```bash
    "scripts": {
    	"start": "lite-server"
    },
    ```
    
12. terminal2 에서 npm start
    
    ```bash
    npm start
    ```
