import "./style.css"

import arrow from "../../assets/arrow.svg"

import icon from "../../assets/icon.png"

import { Contacts } from "./components/Contacts"
import { Socials } from "./components/Socials"
import { Languages } from "./components/Languages"
import { useReducer } from "react"
export const SideBar = () => {
    const [activeSideBar, setActiveSideBar] = useReducer((prev) => !prev, true)

    return (
        <div className={activeSideBar?"side-bar-content side-bar-normal-width": "side-bar-content side-bar-small-width"}>
            <div className={activeSideBar?"flex-row avatar-close-sidebar":"flex-col-rev  avatar-close-sidebar"}>
                <img className={activeSideBar?"":"small-icon"} src={icon} alt={icon} />
                <img onClick={setActiveSideBar} className={activeSideBar?"small-arrow": "small-arrow-reverce"} src={arrow} alt={arrow} />
            </div>
            <h1 className={activeSideBar ? "" : "display-none"}>Tarasov Leo</h1>
            <h2 className={activeSideBar ? "job-color" : "display-none"}>Frontend-developer</h2>
            <div className="line"></div>
            <Contacts activeSideBar={activeSideBar} />
            <div className="line"></div>

            <p className={activeSideBar ? "" : "display-none"}>Socials</p>
            <Socials activeSideBar={activeSideBar} />
            <div className="line"></div>
            <p className={activeSideBar ? "" : "display-none"}>Languages</p>
            <Languages activeSideBar={activeSideBar}/>
            
            {/* <div> */}
            <button className="theme-btn">
                <div className="circle"></div>
            </button>
            {/* </div> */}
        </div>
    )
}