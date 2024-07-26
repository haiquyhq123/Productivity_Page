import React, { createContext, useState, useEffect } from 'react'
import './Todolist.css'

function Todolists() {
  
  const [ar, setAr] = useState(() => {
    const savedAr = localStorage.getItem('tasks');
    return savedAr ? JSON.parse(savedAr) : [];
  });
  const [task,setTask] = useState("");
  const [cycle,setCycle] = useState();
  function changeAr(){
      if(task.trim()!="" && !isNaN(cycle)&& cycle>0 && cycle.trim() !== ""){
        let newAr = {Tasks:task,Cycle:cycle,}
        setAr([...ar,newAr]);
        setCycle(0);
        setTask("");
      }
  }
  function resetAr(){
    setAr([]);
  }
  function changeTask(event){
    setTask(event.target.value);
  }
  function changeCycle(event){
    setCycle(event.target.value);
  }
  function deleteElement(index){
    let newAr = ar.filter((_,i)=>(i!=index));
    setAr(newAr);
  }
  function moveUp(index){
    if(index>0){
      let Newar = [...ar];
      [Newar[index-1],Newar[index]]= [Newar[index],Newar[index-1]];
      setAr(Newar);
    }

  }
  function moveDown(index){
    if(index<ar.length-1){
      let Newar = [...ar];
      [Newar[index+1],Newar[index]]= [Newar[index],Newar[index+1]];
      setAr(Newar);
    }

  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(ar));
  }, [ar]);
  return (

      <div className="todolists">
        <h1 className='todo'>To-Do-Lists</h1>
        <p className='note'>(Note: To add a task, you shouldn't let first input empty and the value of second input is greater than 0)</p>
        <input type="text" placeholder='Name of task' value={task} onChange={changeTask}/>
        <input type="Number" placeholder='Number of pomodoro cycle' value={cycle} onChange={changeCycle}/>
        <button className='add' onClick={changeAr}>Add Task</button>
        <button className='reset' onClick={resetAr}>Reset</button>
        <ol className="display-item">
          {ar.map((value,index)=>(<li className = "choice"key={index}><span className='priority'>{index+1}.</span> <span className='taskname'>{value.Tasks}</span> <span className='cyclenumber'>{value.Cycle}</span> <button className='delete' onClick={()=>(deleteElement(index))}>Finish</button>
          <button className='up' onClick={()=>{moveUp(index)}}>Up</button>
          <button className='down' onClick={()=>{moveDown(index)}}>Down</button>
          </li>))}
        </ol>
        
      </div>

  )
}

export default Todolists;
