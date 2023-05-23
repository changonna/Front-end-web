import React, { useState, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App() {
  console.log("App Component");

  // useState
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState([]);

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

  const handleClick = useCallback((id) => {
    // 클릭한 목록 지우기
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData]);

  const handleRemoveClick = () => {
    setTodoData([]);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}