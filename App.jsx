
import './App.css'
import TaskKeeper from "./TaskKeeper.jsx";
import LookGooder from "./LookGooder.jsx";
import { useState } from 'react'

function App() {

    const [theme, setTheme] = useState('dark')
    const [buttheme, butsetTheme] = useState('butdark')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        butsetTheme(buttheme === 'butlight' ? 'butdark' : 'butlight');
    }

  return (
    <>
        <div className={`app-container ${theme}`}>

            <TaskKeeper/>

            <button className={`themeButton ${buttheme}`} onClick={toggleTheme}>
                {theme === 'light' ? 'Light' : 'Dark'}
            </button>

        </div>

    </>
  )
}

export default App

