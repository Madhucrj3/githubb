import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const MyTaskInddiv=styled.div`
display:flex;
align-items:center;
margin-bottom: 1rem;
`;
const MyTaskinner=styled.div`
display:flex;
justify-content: space-between;
width: 100%;
align-items:center;
background-color: #e6f6ff;
font-family: "Roboto";
font-size: 16px;
font-weight: 400;
border-radius: 8px;
padding: 0 1rem;
margin-left: 0.5rem;
border-left: 5px solid  #096f92;
`;
const MyTaskdel=styled.div``;
const MyTaskdelimg=styled.img`
cursor: pointer;
    height: 20px;
    width: 20px;`;
interface taskTypes
{
    id:string,
    todo:string,
    isCompleted:boolean
  }
const MyTaskInd=inject("store")(
  observer((props) =>  {
    const {task}=props;
    console.log(task);
    console.log(typeof(task.id));
    const [checked, setchecked] = useState(false);
    // setchecked(task.checked);
    console.log(task);
    useEffect(() => {
      setchecked(task.isCompleted);
    },[])
    const handleCheckboxChange=()=>{
        setchecked(prevState=>!prevState)
        const index = props.store.todos.findIndex((x:taskTypes) => x.id ===task.id);
        console.log(index);
        props.store.handleCheck(index);
    }
    const handdel=()=>{
      const index = props.store.todos.findIndex((x:taskTypes) => x.id ===task.id);
      props.store.handleTodoDelete(index);
    }
    
  return (
    
    <MyTaskInddiv>
       <input type="checkbox"  checked={checked} onChange={handleCheckboxChange}/>
       <MyTaskinner>
          <p style={{textDecoration:checked===true ? "line-through" :"none"}}>{task.todo}</p>
          <MyTaskdel>
            <MyTaskdelimg onClick={handdel} src="https://res.cloudinary.com/dqgpcuxoj/image/upload/v1674532048/delete_ryekp1.png" alt="del"/>
          </MyTaskdel>
       </MyTaskinner>
    </MyTaskInddiv>
  )
})
)

export default MyTaskInd