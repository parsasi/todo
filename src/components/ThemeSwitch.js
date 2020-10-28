import React from 'react'
import Switch from "react-switch";

export default function ThemeSwitch(props){
    return (
        <div className="themeSwitch">
            <Switch onChange={props.handleChange} checked={props.checked} />
        </div>
    )
}