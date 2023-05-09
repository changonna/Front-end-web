import React, {Component} from "react";
import "./App.css";

export default class App extends Component {

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
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  // 할 일 목록 데이터
  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      }
    ],
    value: "",
  }

  handleClick = (id) => {
    // 클릭한 목록 지우기
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                <input type="checkbox" defaultChecked={false} />
                  {data.title}                {/* 클릭 이벤트 발생시 함수 호출 */}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
              </div>
          ))}
        </div>
      </div>
    )
  }
}