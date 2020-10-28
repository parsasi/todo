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
                
                {props.tasks.filter(filter).map(item => <Todo key={item.id} text={item.text} status={item.status} id={item.id} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} updateTask={props.updateTask} /> )
                }
            </ul>
        </>
    )
}