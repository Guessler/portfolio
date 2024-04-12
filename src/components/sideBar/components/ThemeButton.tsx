import { useEffect, useReducer } from "react"
import { themes } from "../consts";
import { ThemeType } from "../types";

export const ThemeButton = () => {
    const [isDarkMode, toggleDarkMode] = useReducer((prev) => !prev, false);
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme && savedTheme === "dark"){
            toggleDarkMode()
        }
    },[])
    useEffect(() => {
        const root = document.documentElement;


        if (!isDarkMode) {
            const keys = Object.keys(themes.ligth);
            for(const key of keys){
                root.style.setProperty(key, themes.ligth[key as keyof ThemeType]);
            }
            localStorage.setItem("theme","ligth")
            return 
        }
        const keys = Object.keys(themes.dark);
        for(const key of keys){
            root.style.setProperty(key, themes.dark[key as keyof ThemeType]);
        }
        localStorage.setItem("theme","dark")
        return 
        
    },[isDarkMode])
    return (
        // .swiched-theme-btn
        // "theme-btn"
        <button onClick={toggleDarkMode} className={isDarkMode ? "theme-btn swiched-theme-btn": " theme-btn"}>
            <div className={isDarkMode ? "circle white-circle": "circle "}></div>
        </button>
    )
}