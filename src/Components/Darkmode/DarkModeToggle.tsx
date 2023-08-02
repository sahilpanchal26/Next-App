import React,{useContext} from 'react'
import styles from './page.module.css'
import { ThemeContext , ThemeContextValue } from "../themeContext/ThemeContext";;


const DarkModeToggle = () => {
    const { toggle, mode } = useContext<ThemeContextValue>(ThemeContext); 
    return (
     <div className={styles.container} onClick={toggle}>
       <div className={styles.icon}>🌙</div>
       <div className={styles.icon}>🔆</div>
       <div
         className={styles.ball}
         style={mode === "light" ? { left: "2px" } : { right: "2px" }}
       />
     </div>
   );
 };

export default DarkModeToggle