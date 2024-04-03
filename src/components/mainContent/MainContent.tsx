import "./style.css"
import {ExperiaceBlock} from './experiaceBlock'
// import { Experience } from "./components/Experience"
import activeSideBar from 
export const MainContent = () => {
    return(
        <div className="main-content-bg">
            <div className="container">
            <h2>Experience</h2>
            {/* <Experience /> */}
            <ExperiaceBlock activeSideBar={activeSideBar}/>
            <h2>Latest projects</h2>
            <h2>Education</h2>
            <h2>Skills</h2>
            </div>
        </div>
    )
}