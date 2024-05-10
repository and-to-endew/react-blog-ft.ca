react 간단 정리

-npx create-react-app 프로젝트명   => 이방식으로 react 프로젝트 생성

-react는 js와 유사한 언어인 jsx를 사용한다. 그래서 js와 약간의 차이점이 존재한다.
우선 우리가 react 프로젝트를 만들면 App.js라는 파일이 존재한다. 이게 메인 파일이고 우리가 여기에 html코드를 작성하면 된다. 그리고 index.js가 또 존재하는데
이 파일은 우리가 원래 html 코드는 html파일에 작성해야하는데 App.js에 html을 작성할 수 있게 도와주는 파일이라고 생각하면 된다.


-class 대신에 className을 사용한다.
-변수를 사용, 적용하려면 {변수명} 을 사용한다.

-state 사용
예를 들어 var name="맛집" 이라고 해보자.
이때 우리가 name이라는 변수를 강남 맛집이라고  변경해야 할 때, 기존 js의 경우 변경되지 않는다. 아마 기존 언어들과 = 이라는 등호 기호의 의미가 달라서일거다.
그렇지만 useState라는 함수를 사용하면 자동으로 재랜더링 된다.
-> 즉 변동시 자동으로 html에 반영되게 만들고 싶으면 state를 사용하면 된다. 굳이 변경가능성이 없는 것에 굳이 state를 쓸 필요는 없다.
  let[제목,setTitle]=useState(["추천1","추천2","추천3"]);
이렇게 배열로 만들고, 	사용할 때는 제목[0]  이런식으로 사용하면 된다.

-/*eslint-disable*/
react를 하다보면 터미널에 warning이 많이 뜬다.( 예를 들어 ~~ 변수를 사용하지 않았다던가 등등)
이러한 경고문은 초보때는 성가시므로, 해당 코드를 맨 윗줄에 입력하면 해당코드 아래에있는 코드들은 warning 표시가 뜨지 않는다.

-버튼 기능
1. 좋아요 버튼 & 갯수 UI 만들기

<h4>{제목[0]}<span>👍</span>0</h4>

대충 이렇게 코드를 짤건데, 이때 좋아요 표시는 크롬 주소창에 우클릭 후 그림 이모티콘에서 가져왔다. 숫자 0은 좋아요 버튼을 누를 때마다 하나씩 증가할 예정.
그런데 0은 계속 변동이 있으니까 state로 만들면 좋을것 같다.

let[좋아요,like]=useState(0);
이렇게 선언해 주었다. 이제 state변경 함수인 like를 사용해서 state 를 변경할 수 있다.

- state 변경시 참조형 데이터(배열) 주의 사항
array같이 참조형 데이터의 경우, copy=[제목]이라고 하면, 똑같은 화살표(메모리 주소)를 갖게 된다. react의 특징 중 하나는, 에너지 효율을 위해 똑같음 메모리 주소를 가리킬 경우, copy를 사용하지 않고 기존의 "제목" 배열을 사용한다. 그렇기에, copy의 0번째 인덱스를 변경해도 리엑트 입장에서는 주소값이 같기에, 같은 것을 확인 하면 바로 기존의 제목 배열을 사용한다. 따라서 화살표(메모리 주소)를 기존의 제목 배열과 다른 새로운 값으로 할당해주기 위해, [...제목] 이라는 것을 사용한다. 여기서 ...은 그냥 괄호를 벗겨 새로운 주소를 할당해주는 것이라고 생각하자.

-컴포넌트

div가 너무 많으면 코드가 복잡해진다.
이를 위해, div 묶음들을 적절히 쪼개서 component로 만들자.  => 컴포넌트 만드는법
1.함수를 작성
2.return( )안에 html 담기
3.<함수명> </함수명> 쓰기

return 안에는 전체적으로 한개의 div가 있어야 한다. 즉 병렬적으로 나열 하면 안된다. 근데 만약에 그러고 싶다면 나열한 div들을 또 하나의 div로 감싸면 된다. 근데 이런 div는 쓸모가 없으므로 그냥 <> </>로 묶어도 된다. 이러한 것들을 flagment라고 한다.

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

이렇게 함수를 정의하고, 코드를 작성하는 부분에는
<Modal></Modal>  이렇게만 하면 된다.
<Modal/>  이렇게 하나만 써도 된다.

그러면 컴포넌트는 어디에 쓰면 좋을까??
1. 반복적인 html 축약할때
2. 큰 페이지들=> 페이지들 여러개 만들때 큰 페이지를 하나의 컴포넌트로 해도된다.
3. 자주변경되는 것들

이제 컴포넌트를 쓸 때 주의해야할 점을 알아보자.
1. 다른 함수와 범위가 다르기에, 변수를 가져오는데에 문제가 생긴다.

-react 배포하는법
1. 기존 깃 레포지토리에 gitpages로 배포한 후, 프로젝트 package.json 파일에,
homepage 속성을 추가한다.
2. 그 후, 깃페이지 브랜치가 생성되면, 설정에 가서 브랜치를 변경 후, build를 생성한다.
3. npm run deploy를 실행한다.
결과적으로 평상시에 컴파일하면서 확인할 때는 npm start로 하고 