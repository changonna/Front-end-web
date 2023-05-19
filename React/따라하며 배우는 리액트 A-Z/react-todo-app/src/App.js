import React, { useState } from "react";
import "./App.css";

export default function App() {

  // 변수로 css 설정
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 함수로 css 설정
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  // 할 일 목록 데이터
  const state = {
    todoData: [],
    value: "",
  }

  // useState
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState([]);

  const handleClick = (id) => {
    // 클릭한 목록 지우기
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }
    // 원래 있던 할 일에 새로운 할 일 추가
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
                {data.title}                {/* 클릭 이벤트 발생시 함수 호출 */}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
            </div>
        ))}
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input type="text" name="value" style={{ flex: "10", padding: "5px" }} placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange}/>
          <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
        </form>
      </div>
    </div>
  );
}