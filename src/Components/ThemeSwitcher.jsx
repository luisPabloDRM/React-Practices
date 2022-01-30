import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContext from '../Context/ThemeContext';
import './theme.scss'


 
const ThemeSwitcher = () => {
 const {theme, setTheme}= useContext(ThemeContext)


    return (
    <Button
    onClick={()=>setTheme ( theme === "dark" ? "light" : "dark")}
    className='button-theme' >
            <img src={theme === "dark" ? "https://st4.depositphotos.com/16262510/21425/v/1600/depositphotos_214257940-stock-illustration-sol-vector-icon-isolated-on.jpg": "https://cdn-icons-png.flaticon.com/512/1415/1415431.png"} className='theme-icon' alt='theme'/>
    </Button>
    );
};

export default ThemeSwitcher;
