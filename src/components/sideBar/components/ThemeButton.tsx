import { useEffect, useReducer } from "react"
const themes = {
    ligth:{
        "--main-bg": "#F5F5F5",
        "--accent-color": "#FFFFFF",
        "--side-bar-color" : "#EFEFEF",
    },
    dark:{
        "--main-bg": "#232339",
        "--accent-color": "#2E2E48",
        "--side-bar-color" : "#462682",
    }
}
export const ThemeButton = () => {
    const [isDarkMode, toggleDarkMode] = useReducer((prev) => !prev, false);

    useEffect(() => {
        const root = document.documentElement;
        if (!isDarkMode) {
            const keys = Object.keys(themes.ligth);
            for(const key of keys){
                root.style.setProperty(key, themes.ligth[key]);
            }
            return 
        }
        const keys = Object.keys(themes.dark);
        for(const key of keys){
            root.style.setProperty(key, themes.dark[key]);
        }
        return 
    },[isDarkMode])
    return (
        <button onClick={toggleDarkMode} className="theme-btn">
            <div className="circle"></div>
        </button>
    )
}