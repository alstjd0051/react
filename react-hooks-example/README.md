<!-- rcc
 클래스 컴포넌트 생성
rrc
 클래스 컴포넌트와 react-redux 를 연결해서 생성
rccp
 클래스 컴포넌트와 prop type들을 클래스 뒤에 생성
rcjc
 import와 export없이 클래스컴포넌트 생성
rcfc
 클래스 컴포넌트와 모든 라이프사이클 매서드를 포함해서 생성
rwwd
 import없이 클래스 컴포넌트 생성
rsc
 함수형 컴포넌트를 생성
rsf
 화살표함수형에 props를 내려서 생성 -->

Functional Component= Stateless Componenet = Stateless Functional Component

Functional Component != Stateless Component

* 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
  * 컴포넌트 방식 말고, 상태와 관련된 로직
* 복잡한 컴포넌트들은 이해하기 어렵다
  * 컴파일 단계에서 코드를 최적화하기 어렵다
* this.state는 로직에서 레퍼런스를 공유하기 떄문에 문제가 발생할수 있다.
  * 