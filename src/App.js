import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // let[글제목1,a] = useState('추천1');    -> 하나하나 state 부여했을 때
  // let[글제목2,b] = useState('추천2');
  // let[글제목3,c] = useState('추천3');

  let[제목,setTitle]=useState(["추천1","추천2","추천3"]); //배열로 state 부여했을 때

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'16px'}}>reactBlog</h4>
      </div>
      <div className='list'>
        <h4>{제목[0]}</h4>
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
    </div>
  );
}

export default App;
