import React from 'react'

export default function FilterButton(props){
    return (
        <button type="button" aria-pressed={props.isPressed} className="btn toggle-btn" aria-pressed="true" onClick={_ => props.setFilter(props.name)}>
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    )
}