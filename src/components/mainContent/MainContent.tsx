import "./style.css"
import { ExperiaceBlock } from './components/ExperiaceBlock'
import { useSidebar } from "../../utils/useSidebar"
import { Projects } from "../projects"
import icon from "../../assets/image 1.png"
import { Education } from "../education"
import { Skills } from "../skills"

import kp11 from "../../assets/kp-11-logo.svg"
export const MainContent = () => {

    const {state} = useSidebar()

    return(
        <div className="main-content-bg">
            <div className="container">
            <h2>Experience</h2>
            <ExperiaceBlock activeSideBar={state}/>
            <h2>Latest projects</h2>
            <Projects 
            webSiteCard = {icon}
            webSiteName = "Poweful Design System"
            link="https://sports.sharix.org"
            clarification = "Figma UI Kit and Design System targeting a wide variety of use cases."
            />
            <h2>Education</h2>
            <Education
            icon = {kp11}
            Enterprise = "kp-11"
            year = "Oct 2023"
            clarification = "College of Entrepreneurship 11"
            />
            <h2>Skills</h2>
            <Skills/>
            </div>
        </div>
    )
}