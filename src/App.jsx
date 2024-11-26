import React, { useState } from 'react'
import './index.css'
const App = () => {
  const [value,setvalue] = useState();
  const [data,setdata] = useState([]);
  const [updateValue,setupdateValue] = useState(null)

  const handledata = (e)=>{
    if(e.keyCode ===13 || e.type=='click'){
      if(!value?.trim()) return;
      if(updateValue){
        setdata((prevData)=>prevData.map((item)=>item.id === updateValue.id? {...item,value} : item))
        setupdateValue(null)
      }else{
        const newtask = {id: Date.now(),value}
        setdata((prevData)=>[...prevData,newtask])
        
      }
      setvalue("")
    }
  }

  const deletTodo = (id)=>{
    setdata((prevData)=>prevData.filter((item)=>item.id !==id))
  }
  
  const updateData = (item)=>{
    setupdateValue(item)
    setvalue(item.value)
  }
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div>
        <input
          value={value}
          onKeyDown={handledata}
          onChange={(e) => setvalue(e.target.value)}
          type="text"
          placeholder="Enter task"
        />
        <button id='button' onClick={handledata}>{updateValue ? "Update" : "Submit"}</button>
      </div>
      <div className="todo-list">
        {data.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <span>{item.value}</span>
              <button
                className="delete"
                onClick={() => deletTodo(item.id)}
              >
                Delete
              </button>
              <button onClick={() => updateData(item)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

export default App





