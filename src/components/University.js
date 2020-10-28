import React from 'react'

export default function University(props){
    return (
        <div className="university">
            <h3>{props.name}</h3>
            <h4>{props.country}</h4>
            <a className="university-link" href={props.link}>Visist its website</a>
        </div>
    )
}