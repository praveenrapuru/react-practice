import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HiComponent from './HiComponent';
import HelloComponent from './HelloComponent';
import MyInput from './InputboxColors';
import TasksList from './Component_tasks/Tasks';
import ItemsList from './Component_items/Items';
import Layout from './Layout';
import UserList from './components/users/UserList';
import User from './components/users/User';
import Create from './components/users/Create';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <App></App>
    <HiComponent></HiComponent>
    <HelloComponent></HelloComponent>
    <MyInput></MyInput>
    <TasksList></TasksList>
    <ItemsList> </ItemsList>
    <Layout></Layout> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='MyInput' element={<MyInput />} />
          <Route path="TasksList" element={<TasksList />} />
          <Route path="Itemslist" element={<ItemsList />} />
          <Route path="UserList" element={<UserList />} />
          <Route path='UserList/:user_id' element={<User/>}/>
          <Route path='Create' element = {<Create/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
