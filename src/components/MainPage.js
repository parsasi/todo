import React , {useContext, useEffect, useState} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import AllTasks from './AllTasks'
import FilterButtons from './FilterButtons'
import Form from './Form'

const FILTER_MAP = {
  all : () => true,
  NOT_STARTED : item => item.status === 0,
  STARTED : item => item.status === 1,
  COMPLETED : item => item.status === 2,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)


function MainPage(props) {

  const [theme ,] = useContext(ThemeContext)

  const [tasks , setTasks] = useState([])
  const [filter , setFilter] = useState('all')

  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem('ALL_TASKS'))
    allItems && setTasks(allItems) 
  } , [])


  useEffect(() => {
    localStorage.setItem('ALL_TASKS' , JSON.stringify(tasks))
  } , [tasks , setTasks])


  const clearTasks = () => {
    setTasks([]);   
  }

  const addTask = (task) => {
    const newTaskList = [task , ...tasks]
    setTasks(_ => newTaskList)
  }

  const changeTaskStatus = (id , status) => {
    const newTaskList = [...tasks].map(item => item.id === id ? {...item , status} : item)
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


  return (
        <div className={`todoapp stack-large ${theme === 'dark' && 'dark'}`}>
          <h1>TodoMatic</h1>
          <Form addTask={addTask} clearTasks={clearTasks} />
          <FilterButtons filterList={FILTER_NAMES} filter={filter} setFilter={setFilter} />
          
          <h2 id="list-heading">
            {tasks.filter(item => !item.status === 2).length} tasks remaining
          </h2>
          <AllTasks filterMap={FILTER_MAP} filter={filter} tasks={tasks} changeTaskStatus={changeTaskStatus} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
  );
}

export default MainPage;
