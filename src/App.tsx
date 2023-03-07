import React from 'react';
import './App.css';
import styled from 'styled-components';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import MyTask from './components/MyTask';
import { inject, observer } from 'mobx-react';
const Heading = styled.h1`
color: #000;
text-align: center;
font-family: "Roboto";
font-size: 46px;
font-weight: 500;
margin-top: 20px;
margin-bottom: 20px
`;

const App= inject("store")(
  observer((props) => {
  return (
    <div className="App">
       <Heading>ToDos</Heading>
       <Input />
       <MyTask  />
    </div>
  );
})
);

export default App;
