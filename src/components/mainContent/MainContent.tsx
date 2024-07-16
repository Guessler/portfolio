import "./style.css";
import { ExperiaceBlock } from './components/ExperiaceBlock';
import { useSidebar } from "../../utils/useSidebar";
import { Projects } from "../projects";
import { Skills } from "../skills";
import { Educations } from "../education/Educations";

export const MainContent = () => {
    const { state } = useSidebar();

    return (
        <div className="main-content-bg">
            <div className={state ? "container enable-animation" : "big-container enable-animation"}>
                <h2>Experience</h2>
                <ExperiaceBlock activeSideBar={state} />

                <Projects />
                <h2>Education</h2>
                <Educations/>
                <h2>Skills</h2>
                <Skills/>
            </div>
        </div>
    );
};
