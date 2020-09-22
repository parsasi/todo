import React from 'react'
import {nanoid} from 'nanoid'
export default function Form(props){

    const addClickHandler = (e) => {
        e.preventDefault()
        const textElement = document.querySelector('input#new-todo-input')
        const text = textElement.value
        if(text && typeof text === 'string'){
            props.addTask({text , checked : false , id : nanoid()})
            textElement.value = ""
        }
    }
    return (
        <form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
              </label>
            </h2>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
            <button onClick={addClickHandler} className="btn btn__primary btn__lg">
              Add
            </button>
          </form>
    )
}