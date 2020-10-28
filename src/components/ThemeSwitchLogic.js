import React , {useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeSwitch from './ThemeSwitch'

export default function ThemeSwitchLogic(props){
    const [theme , setTheme] = useContext(ThemeContext);
    
    const themeChangeHandler = (e) => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return <ThemeSwitch handleChange={themeChangeHandler} checked={theme === 'light'} />
}