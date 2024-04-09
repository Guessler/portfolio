import "./style.css"

import arrow from "../../assets/arrow.svg"

import icon from "../../assets/icon.png"

import { Contacts } from "./components/Contacts"
import { Socials } from "./components/Socials"
import { Languages } from "./components/Languages"
import { useSidebar } from "../../utils/useSidebar"
import clsx from "clsx"

export const SideBar = () => {
    const {state: activeSideBar, toggleState: toggleActiveSideBar } = useSidebar()

    return (
        <div className={clsx('side-bar-content',activeSideBar? "side-bar-normal-width": "side-bar-small-width")}>
            <div className={activeSideBar?"flex-row avatar-close-sidebar":"flex-col-rev  avatar-close-sidebar"}>
                <img className={activeSideBar?"":"small-icon"} src={icon} alt={icon} />
                <img onClick={toggleActiveSideBar} className={activeSideBar?"small-arrow": "small-arrow-reverce"} src={arrow} alt={arrow} />
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
            
            <div className={activeSideBar? "" : "button-adaptive-position"}>
            <button className="theme-btn">
                <div className="circle"></div>
            </button>
            </div>
        </div>
    )
}