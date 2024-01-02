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
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
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
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  }

  /* 3. 조건에 따른 UI Rendering */
  if (isEditing) {
    // edting시 UI
    return (
      <div className="flex items-center justify-between w-full px-4 py-1 my-1 text-gray-600 bg-gray-100 border rounded row">
        <div key={id}>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-3 py-2 mr-4 text-gray-500 appearance-none"
              value={editedTitle}
              onChange={handleEditChange}
            />
          </form>
          <div className="items-center">
            <button
              class="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>
            <button 
              onClick={handleSubmit}
              class="px-4 py-2 float-right"
              type='submit'
            >
              save
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
        <div className="items-center" key={id}>
          <input 
            type="checkbox" 
            defaultChecked={completed} 
            onChange={() => handleCompleteChange(id)} 
          />{" "}
          <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
        <div className="item-center">
          <button 
            onClick={() => handleClick(id)} className="float-right px-4 py-2">x</button>
          {/* 2. Edit 버튼 추가 & 클릭시 isEdting State 변경 */}
          <button onClick={() => setIsEditing(true)} className="float-right px-4 py-2">
            edit
          </button>
        </div>
      </div>
    )
  }
})

export default List;