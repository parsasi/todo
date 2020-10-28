import React , { useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'

export default function ThemeContextProvider(props){

    const [ theme , setTheme ] = useState('light')

    return (
        <>
            <ThemeContext.Provider value={[theme , setTheme]}>
                {props.children}
            </ThemeContext.Provider>
        </>
    )

}