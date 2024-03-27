import "./style.css"
import {ExperiaceBlock} from './ExperiaceBlock'

export const MainContent = () => {
    return(
        <div className="main-content-bg">
            <div className="container">
            <h2>Experience</h2>
            <ExperiaceBlock name="lasdiasdjasidj" />
            <h2>Latest projects</h2>
            <h2>Education</h2>
            <h2>Skills</h2>
            </div>
        </div>
    )
}