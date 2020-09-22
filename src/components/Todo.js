import React , {useState} from 'react'


export default function Todo(props){

    const [isEditing , setIsEditing] = useState(false)

    const taskChangeHandler = (e) => {
      props.completeTask(props.id)
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
          <input id={props.id} onChange={taskChangeHandler} type="checkbox" defaultChecked={props.checked} />
          <label className="todo-label" htmlFor={props.id}>
            {props.text}
          </label>
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
