/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // let[글제목1,a] = useState('남자추천1');    -> 하나하나 state 부여했을 때
  // let[글제목2,b] = useState('추천2');    ->왼쪽은 state명, 오른쪽은 state변경함수
  // let[글제목3,c] = useState('추천3');

  let[제목,setTitle]=useState(["남자추천","가추천2","라추천3"]); //배열로 state 부여했을 때
  let[좋아요,setLike]=useState(0);   //좋아요 갯수는 변동되니까 state로 만들어 놓음


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'16px'}}>reactBlog</h4>
      </div>
      <button onClick={()=>{
        
        // array같이 참조형 데이터의 경우, copy=[제목]이라고 하면, 똑같은 화살표(메모리 주소)
        // 를 갖게 된다. react의 특징 중 하나는, 에너지 효율을 위해 똑같음 메모리 주소를 가리킬 경우,
        // copy를 사용하지 않고 기존의 "제목" 배열을 사용한다. 그렇기에, copy의 0번째 인덱스를 변경해도
        // 리엑트 입장에서는 주소값이 같기에, 같은 것을 확인 하면 바로 기존의 제목 배열을 사용한다.
        // 따라서 화살표(메모리 주소)를 기존의 제목 배열과 다른 새로운 값으로 할당해주기 위해,
        // [...제목] 이라는 것을 사용한다. 여기서 ...은 그냥 괄호를 벗겨 새로운 주소를 할당해주는 것이라고 생각하자.

        let copy=[...제목];    
        copy[0]='여자추천';
        setTitle(copy);

      }}>전환 버튼</button>

      <button onClick={()=>{
        let copy=[...제목];
        copy.sort();
        setTitle(copy);
        

      }}>정렬 버튼</button>


      <div className='list'>
        <h4>{제목[0]}
        <span onClick={()=>{setLike(좋아요++)}}>👍</span>{좋아요}   {/*좋아요를 누르는 이벤트를 위해 onclick!*/}
        
        
        </h4>
        <p>2월 17일 발행</p>

      </div>
      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>2월 17일 발행</p>

      </div>
      <div className='list'>
        <h4>{제목[2]}</h4>
        <p>2월 17일 발행</p>

      </div>

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
