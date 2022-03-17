import React from 'react';
import './TodoList.css';

const TodoItem = ({ text, doned, onDone, onDelete,day,selected,total }) => {
  return (
    <li  className={`todoItem ${selected !== day ? 'not' : ''}`} >{total}
      <div className={`text ${doned ? 'doned' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onDone}>완료</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </li>
  );
};
const a = 0 ;
const TodoList = ({ input,todoList,onChange,onSubmit, onDone, onDelete,selected }) => {
    const todoItems = todoList.filter(list=>list.day === selected).map((w,i,a) =>(
    
        <TodoItem 
        total = {a.length}
        selected={selected}
        key = {w.id} 
        day = {w.day}
        text ={w.name} 
        doned = {w.doned} 
        id ={w.id} 
        onDone={()=>onDone(w.id)}
        onDelete={()=>onDelete(w.id)}
        />
    ));
    return(
        <div className="TodoList">
            <h2>TODO LIST</h2>
            <form onSubmit={onSubmit}>
             <input value={input} onChange={onChange} />
             <button>등록</button>
            </form>
            <ul>
              <li>{selected}요일의 할일 목록(count/total)</li>
              {todoItems}
            </ul> 
        </div>
    );
};



export default TodoList;
