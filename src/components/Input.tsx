import { inject, observer } from 'mobx-react';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { all, completed, Notcompleted } from '../contants';
const InputMain=styled.div`
width: 99%;
`;
const InputHead=styled.h1`
text-align: left;
font-family: "Roboto";
font-size: 32px;
font-weight: 700;
`;
const InputHeaddiv=styled.div`
display:flex;
align-items:center;
justify-content: space-between;
@media screen and (max-width: 580px) {
  display: block;
  margin-bottom: 1rem;
}
`;
const NormalHead=styled.span`
font-weight: normal;
`;
const InputCont=styled.div`
width:97%`;
const Inputbar=styled.input`
width: 100%;
padding: 0.7rem;
border-radius: 8px;
/* height: 30px; */
`;
const AddButton=styled.button`
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
const SearchButton=styled.button`
cursor: pointer;
color: white;
background-color: #4c63b6;
font-family: "Roboto";
font-size: 18px;
border-width: 0;
border-radius: 4px;
margin-left: 1rem;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 20px;
padding-left: 20px;
@media screen and (max-width: 580px) {
  margin-left: 0;
  margin-right: 1rem;
}
`;
const InputHeaddivmain=styled.div`
display:flex
`;
const Input =inject("store")(
  observer((props) => {
    const [taskValue, settaskValue] = useState('');
    const handleClick=()=>{
      props.store.addtodo(uuidv4(),taskValue);
      console.log(props.store.todos);
      settaskValue('')
    }
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        settaskValue(e.target.value);
    }
    const handleAll=()=>{
      props.store.chageState(all);
    }
    const handleActive=()=>{
      props.store.chageState(Notcompleted);
    }
    const handleCompleted=()=>{
      props.store.chageState(completed);
    }
  return (
    <InputMain>
    <InputHeaddiv>
        <InputHead>Create <NormalHead>Task</NormalHead></InputHead>
        <InputHeaddivmain>
        <SearchButton onClick={handleAll}>All</SearchButton>
        <SearchButton onClick={handleActive}>Active </SearchButton>
        <SearchButton onClick={handleCompleted}>completed</SearchButton>
        </InputHeaddivmain>
    </InputHeaddiv>
       <InputCont>
       <Inputbar placeholder="what's need to be done ?" value={taskValue} onChange={handleChange} ></Inputbar>
       </InputCont>
       <AddButton onClick={handleClick} >Add</AddButton>
    </InputMain>
  )
})
);

export default Input