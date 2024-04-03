import "./style.css"
import { ExperiaceBlock } from './components/ExperiaceBlock'
import { useSidebar } from "../../utils/useSidebar"

export const MainContent = () => {

    const {state} = useSidebar()

    return(
        <div className="main-content-bg">
            <div className="container">
            <h2>Experience</h2>
            <ExperiaceBlock activeSideBar={state}/>
            <h2>Latest projects</h2>
            <h2>Education</h2>
            <h2>Skills</h2>
            </div>
        </div>
    )
}