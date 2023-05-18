import React from "react";
import "./App.css";

export default function App() {

  // 변수로 css 설정
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 함수로 css 설정
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  // 할 일 목록 데이터
  state = {
    todoData: [],
    value: "",
  }

  handleClick = (id) => {
    // 클릭한 목록 지우기
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }
    // 원래 있던 할 일에 새로운 할 일 추가
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    this.setState({ todoData: newTodoData });
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)} />
                {data.title}                {/* 클릭 이벤트 발생시 함수 호출 */}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
        ))}
        <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
          <input type="text" name="value" style={{ flex: "10", padding: "5px" }} placeholder="해야 할 일을 입력하세요." value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
        </form>
      </div>
    </div>
  );
}