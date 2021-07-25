# React Hooks

Functional Component= Stateless Componenet = Stateless Functional Component

Functional Component != Stateless Component

-   컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
    -   컴포넌트 방식 말고, 상태와 관련된 로직
-   복잡한 컴포넌트들은 이해하기 어렵다
    -   컴파일 단계에서 코드를 최적화하기 어렵다
-   this.state는 로직에서 레퍼런스를 공유하기 때문에 문제가 발생할수 있다.

#

-   useState
    -   state를 대체할 수 있다.
-   useEffect
    -   라이프 사이클 훅을 대체 할 수 있다.
        -   componentDidMount
        -   componentDidUpdate
        -   componentWillUnmoount

# Hook

-   특징:
    -   훅또는 함수컴포넌트안에서 실행가능

*   api
    -   useHistory
    -   useParams

# useReducer

-   state를 변경하는 use state 확장판
-   다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우
-   다음 state가 이전 state에 의존적인 경우
-   **Redux를 안다면 쉽게 사용가능**

*   createRef = 항상레퍼랜스생성해서 렌더될때 넣어준다
*   useRef = 랜더사이에도 유지해준다
