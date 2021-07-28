# React 라우팅

## 라이브러리 설치

```

-   npx create-react-app react-router-example
-   npm i react-router-dom

```

##

-   특정 경로에서 보여줄 컴포넌트를 준비
    -   About.jsx
    -   Home.jsx
    -   Profile.jsx

exact 프롭스 설정하면 컴포넌트가 겹치지않고 따로나온다.

## URLSearchParams

-   단점
    1. 메서드를 기억하고 써야한다.
    2. 브라우저 내장객체이기때문에 브라우저가 지원안되는것들도 있다.

*   단점 극복법
    -   npm i query-string 라이브러리 사용

# Switch

-   여러 Route중 순서대로 먼저 맞는 하나만 보여준다.
-   exact를 뺄 수 있는 로직을 만들 수 있다.
-   가장 마지막에 어디 path에도 맞지 않으면 보여지는 컴포넌트를 설정해서 "Not Found"페이지를 만들 수 있다.

# Link

-   a태그와 같은 것

# NavLink

-   import {NavLink} from 'react-router-dom';

*   activeClassName, activeStyle 처럼 active한 상태에 대한 스타일 지정이 가능
*   Route의 path처럼 동작하기 떄문에 exact가 있다.
