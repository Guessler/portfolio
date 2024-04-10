import { useEffect, useReducer } from "react"
import { themes } from "../consts";
import { ThemeType } from "../types";

export const ThemeButton = () => {
    const [isDarkMode, toggleDarkMode] = useReducer((prev) => !prev, false);

    useEffect(() => {
        const root = document.documentElement;

        if (!isDarkMode) {
            const keys = Object.keys(themes.ligth);
            for(const key of keys){
                root.style.setProperty(key, themes.ligth[key as keyof ThemeType]);
            }
            return 
        }
        const keys = Object.keys(themes.dark);
        for(const key of keys){
            root.style.setProperty(key, themes.dark[key as keyof ThemeType]);
        }
        return 
    },[isDarkMode])
    return (
        <button onClick={toggleDarkMode} className="theme-btn">
            <div className="circle"></div>
        </button>
    )
}