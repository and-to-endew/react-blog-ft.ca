import "./Blog.css";
import React, { useState } from 'react';

function Blog() {
  let [제목, setTitle] = useState(["남자추천", "추천1", "라추천2"]);
  let [모달, setModal] = useState(false);     //모달 상태
  let [선택된제목, set선택된제목] = useState(0); // 선택된 제목의 인덱스를 저장
  let [입력된제목, set입력된제목] = useState(""); // 입력된 제목 상태 추가

  function 제목삭제(index) {
    let newTitle = [...제목];
    newTitle.splice(index, 1);
    setTitle(newTitle);
  }

  function 제목추가() {
    let newTitle = [...제목, "추가된제목"];   //=>....
    setTitle(newTitle);
  }

  function 모달열기(index) {
    if (모달 && 선택된제목 === index) {
      // 이미 모달이 열려있고, 현재 클릭된 제목이 이미 선택된 제목과 같다면 모달을 닫습니다.
      setModal(false);
    } else {
      // 그렇지 않은 경우, 새로운 제목을 선택하고 모달을 엽니다.
      set선택된제목(index);
      setModal(true);
    }
  }

  function 제목저장() {
    if (입력된제목.trim() !== "") { // 입력된 제목이 공백이 아닌 경우에만 실행
      let newTitle = [입력된제목, ...제목]; // 입력된 제목을 리스트의 제일 앞에 추가
      setTitle(newTitle);
      set입력된제목(""); // 입력된 제목 초기화
    } else {
      alert("제목을 입력해주세요!"); // 입력된 제목이 없을 때 알림창 띄우기
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }}>reactBlog</h4>
      </div>
      <div id="containers">
        <div id="left-container">
          {제목.map((제목, index) => (        //map 공부하기
            <List key={index} 제목={제목} index={index} 제목삭제={() => 제목삭제(index)} 제목추가={제목추가} 모달열기={() => 모달열기(index)} />
          ))}
        </div>
        <div id="right-container">
        <div id="search-save-box">
            <input value={입력된제목} onChange={(e) => set입력된제목(e.target.value)}></input>
            <button onClick={제목저장}>save</button>
          </div>   
          {모달 ? <Modal 제목={제목[선택된제목]} /> : null}
        </div>
      </div>
    </div>
  );
}

function Modal({ 제목 }) {
  return (
    <div className='modal'>
      <h4>제목: {제목}</h4>
      <p>날짜</p>
    </div>
  );
}

function List({ 제목, index, 제목삭제, 모달열기 }) {
  let [좋아요, set좋아요] = useState(0);
  let [싫어요, set싫어요] = useState(0);

  return (
    <div className="list">
      <h4 onClick={() => 모달열기(index)}>{제목} {/* 모달을 열기 위한 함수 연결 */}
        <span onClick={(e) => { e.stopPropagation(); set좋아요(좋아요 + 1); }}>👍</span>{좋아요} {/* 이벤트 전파를 막기 위한 e.stopPropagation() 추가 */}
        <span onClick={(e) => { e.stopPropagation(); set싫어요(싫어요 + 1); }}>👎</span>{싫어요}
      </h4>
      <span>2021.09.29</span>
      <button onClick={(e) => {
        e.stopPropagation(); // 이벤트 전파를 막음  => 이벤트 버블링
        제목삭제(); // 제목 삭제 함수 호출
      }}>삭제</button>
    </div>
  );
}

export default Blog;