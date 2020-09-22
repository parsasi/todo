import React from 'react'
import Todo from './Todo'

export default function AllTasks(props){
    const filter = props.filterMap[props.filter]
    return (
        <>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                
                { props.filter === 'all' ?
                    props.tasks.map(item => <Todo key={item.id} text={item.text} checked={item.checked} id={item.id} completeTask={props.completeTask} deleteTask={props.deleteTask} updateTask={props.updateTask} /> )
                    : props.tasks.filter(filter).map(item => <Todo key={item.id} text={item.text} checked={item.checked} id={item.id} completeTask={props.completeTask} deleteTask={props.deleteTask} updateTask={props.updateTask} /> )
                }
            </ul>
        </>
    )
}