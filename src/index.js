import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './task1';
import DarkMode from './task2';
import Hello from './hello';
import ListofStudents from './dz3/task3';
import EmployeesList from './dz3/task4';
import TodoList from './dz3/task5';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter/>
  <DarkMode/>
  <Hello/>
  <ListofStudents/>
  <EmployeesList/>
  <TodoList/>
  </>
);


