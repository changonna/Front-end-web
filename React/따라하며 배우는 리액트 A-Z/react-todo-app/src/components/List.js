import React from 'react'

const List = React.memo(({
  id, 
  title, 
  completed, 
  todoData, 
  setTodoData, 
  provided,
  snapshot
}) => {
  console.log("List Component");

  const handleClick = (id) => {
    // 클릭한 목록 지우기
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  }

  // 함수로 css 설정
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  // 변수로 css 설정
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }


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
      </div>
    </div>
  )
})

export default List;