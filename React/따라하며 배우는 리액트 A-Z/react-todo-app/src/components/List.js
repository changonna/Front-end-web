import React, { useState } from 'react'

const List = React.memo(({
  handleClick,
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot
}) => {
  console.log("List Component");

  /* 1. 다른 UI 제공을 위한 State 생성 */
  // 수정상태인지
  const [isEditing, setIsEditing] = useState(false);
  // 변경한 title
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  /* 4. editing 입력할때 editedTitle State 변경 */
  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  }

  /* 5. editing 입력 후 Save */
  const handleSubmit = (event) => {
    // 기존 이벤트 막기
    event.preventDefault();
    // id가 같은 List의 title 변경
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  }

  /* 3. 조건에 따른 UI Rendering */
  if (isEditing) {
    // edting시 UI
    return (
      <div className={`flex items-center justify-between w-full bg-gray-100 px-4 py-1 my-2 text-gray-600 rounded`}>
        <div style={getStyle(completed)} key={id}>
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />
          </form>
          <button
            style={btnStyle}
            onClick={() => setIsEditing(false)}
          >
            x
          </button>
          <button onClick={handleSubmit}
            className="px-4 py-2 float-right"
            type='submit'
          >
            save
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 rounded`}
      >
        <div style={getStyle(completed)} key={id}>
          <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(id)} />
          {title}                {/* 클릭 이벤트 발생시 함수 호출 */}
          <button style={btnStyle} onClick={() => handleClick(id)}>x</button>
          {/* 2. Edit 버튼 추가 & 클릭시 isEdting State 변경 */}
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
        </div>
      </div>
    )
  }
})

export default List;