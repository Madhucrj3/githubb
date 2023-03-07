import { inject, observer } from 'mobx-react';
import React from 'react'
import styled from 'styled-components';
import MyTaskInd from './MyTaskInd';
const TaskMain=styled.div`
`;
const TaskHead=styled.h1`
text-align: left;
font-family: "Roboto";
font-size: 32px;
font-weight: 700;
`;
const NormalH=styled.span`
font-weight: normal;
`;
const SaveButton=styled.button`
cursor: pointer;
color: white;
background-color: #4c63b6;
font-family: "Roboto";
font-size: 18px;
border-width: 0;
border-radius: 4px;
margin-top: 20px;
margin-bottom: 50px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 20px;
padding-left: 20px;
`;
const IndTasDai=styled.div``;
interface taskType{
  id:string,
  todo:string,
  isCompleted:boolean
}
const MyTask=(inject)("store")(
  observer((props) =>  {
    let data=props.store.filterdTodoData;
    console.log(props.store);
    const handlesav=()=>{
      // localStorage.setItem("todolist",props.store.todos);
    }
  return (
    <TaskMain>
        <TaskHead>My <NormalH>Tasks</NormalH></TaskHead>
        <IndTasDai>
        {data.length >0 && data.map((task:taskType)=> (<MyTaskInd key={task.id} task={task}  />))}
        </IndTasDai>
        <SaveButton onClick={handlesav}>Save</SaveButton>
    </TaskMain>
  )
})
)

export default MyTask