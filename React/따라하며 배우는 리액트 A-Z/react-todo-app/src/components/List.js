import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {

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

    const handleEnd = (result) => {
        // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함됩니다.
        console.log(result);

        // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
        if(!result.destination) return;
        
        // react 불변성을 지켜주기위해 새로운 todoaData 새엇ㅇ
        const newTodoData = [...todoData];

        // 1. 변경시키는 아이템을 배열에서 지워줍니다.
        // 2. return 값으로 지워진 아이템을 잡아줍니다.
        const [reorderItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderItem을 insert 해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderItem);
        setTodoData(newTodoData);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="to-dos">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div key={data.id}
                                        {...provided.draggableProps} 
                                        ref={provided.innerRef} 
                                        {...provided.dragHandleProps}
                                        className={`${
                                            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                                        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 rounded`}
                                        >
                                            <div style={getStyle(data.completed)} key={data.id}>
                                                <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
                                                {data.title}                {/* 클릭 이벤트 발생시 함수 호출 */}
                                                <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
