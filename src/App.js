import React , {useMemo, useState} from 'react';
import './App.css';
import AllTasks from './components/AllTasks'
import FilterButtons from './components/FilterButtons'
import Form from './components/Form'

const FILTER_MAP = {
  all : () => true,
  active : item => !item.checked,
  completed : item => item.checked
}

const FILTER_NAMES = Object.keys(FILTER_MAP)


function App(props) {
  const [tasks , setTasks] = useState([])
  const [filter , setFilter] = useState('all')


  const addTask = (task) => {
    const newTaskList = [task , ...tasks]
    setTasks(_ => newTaskList)
  }

  const completeTask = (id) => {
    const newTaskList = [...tasks].map(item => item.id === id ? {...item , checked : !item.checked} : item)
    setTasks(newTaskList)
  }

  const deleteTask = (id) => {
    const newTaskList = [...tasks].filter(item => item.id !== id)
    setTasks(newTaskList)
  }

  const updateTask = (task) => {
    const newTaskList = [...tasks].map(item => item.id === task.id ? {...item , ...task} : item)
    setTasks(newTaskList)
  }
  let allTasks = []

  useMemo(_ => {
    allTasks = tasks
  } , [tasks , setTasks])
  return (
        <div className="todoapp stack-large">
          <h1>TodoMatic</h1>
          <Form addTask={addTask} />
          <FilterButtons filterList={FILTER_NAMES} filter={filter} setFilter={setFilter} />
          
          <h2 id="list-heading">
            {tasks.filter(item => !item.checked).length} tasks remaining
          </h2>
          <AllTasks filterMap={FILTER_MAP} filter={filter} tasks={tasks} completeTask={completeTask} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
  );
}

export default App;
