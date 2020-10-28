import React , {useState} from 'react'


export default function Todo(props){

    const [isEditing , setIsEditing] = useState(false)

    const taskChangeHandler = (status) => {
      props.changeTaskStatus(props.id , status)
    }

    const deleteTaskHandler = (e) => {
      e.preventDefault()
      props.deleteTask(props.id)
    }

    const updateTaskHandler = (e) => {
      e.preventDefault()
      const text =  document.querySelector(`#${props.id}`).value
      if(text && typeof text === 'string'){
        props.updateTask({id : props.id , text})
        setIsEditing(_ => false)
      }
    }

    const Edit = (
      <form className="stack-small">
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New name for {props.text}
          </label>
          <input id={props.id} className="todo-text" type="text" defaultValue={props.text} />
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel" onClick={_ => setIsEditing(false)}>
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" onClick={updateTaskHandler} className="btn btn__primary todo-edit">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>
  )
  
  const View = (
  
      <li className="todo stack-small">
        <div className="c-cb">
          <p style={{fontSize : '2rem'}} className="todo-label">
            {props.text}
          </p>
          <>
            <input id={props.id} onChange={_ => taskChangeHandler(0)} type="radio" name={props.id} checked={props.status === 0} />&nbsp; Not Started &nbsp;&nbsp;
            <input id={props.id} onChange={_ => taskChangeHandler(1)} type="radio" name={props.id} checked={props.status === 1} />&nbsp; Started &nbsp;&nbsp;
            <input id={props.id} onChange={_ => taskChangeHandler(2)} type="radio" name={props.id} checked={props.status === 2} />&nbsp; Completed  &nbsp;&nbsp;
          </>
        </div>
        <div className="btn-group">
          <button type="button" className="btn" onClick={_ => setIsEditing(true)}>
            Edit <span className="visually-hidden">{props.text}</span>
          </button>
          <button type="button" onClick={deleteTaskHandler} className="btn btn__danger">
            Delete <span className="visually-hidden">{props.text}</span>
          </button>
        </div>
      </li>
  )
     return isEditing ? Edit : View ;
}
