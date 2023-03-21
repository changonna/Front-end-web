# TypeScript

## [ 기존 JS의 문제점 ]
<br>

> null이나 undefined에 계산을 해도 error가 나지 않는다.

> 객체에 없는 프로퍼티를 가져와도
undefined를 출력하고 error가 나지 않는다
```js
null + 213 // --> 213
undefined * 123 // --> NaN

const a = 1;
a.b // --> undefined
```

<br><br>

## [ TypeScript 장점 ]
<br>

### 1. Static Checking (정적 검사)
> 실행하기 전에 데이터의 종류나 타입을 검사
작성과 동시에 분석해서 error를 찾아준다.

### 2. 실행 속도
> 코드 작성 시에 오류를 체크하고, 타입을 미리 결정하기 때문에 기계가 할 일을 덜어 실행 속도가 매우 빠르다.

### 3. 안정성 & 협업용이성
> 타입을 명시할 수 있고 컴파일시 오류를 찾기 때문에 보다 더 안정적이다.

### 4. SuperSet

> 자바스크립트의 모든 단점을 보완해 만든 언어이다. (JS의 확장버전)
<br>

> TypeScript is JavaScript (with types)





<br><br>

## [ Study List ]

1. Type Annotation
2.
3.
4.
5.




<br><br>

## [ Compile ]

### .ts --- [compile] --> .js

```console
tsc 파일명.ts
```


