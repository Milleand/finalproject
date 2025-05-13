import './LookGooder.css'
import { useState } from 'react'

function LookGooder(){
    const [darkMode, setDarkMode] = useState(false);
    const toggleBackground = () => {
        setDarkMode(!darkMode);
    };

return (
    <div className={darkMode ? 'app dark' : 'app'}>
        <button onClick={toggleBackground}>
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    </div>
);
}
export default LookGooder;

