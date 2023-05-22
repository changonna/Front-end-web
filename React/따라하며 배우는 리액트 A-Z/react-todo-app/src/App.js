import React, { useState } from "react";
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

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}