import "./style.css";
import { ExperiaceBlock } from './components/ExperiaceBlock';
import { useSidebar } from "../../utils/useSidebar";
import { Projects } from "../projects";
import { Skills } from "../skills";
import { Educations } from "../education/Educations";

export const MainContent = () => {
    const { state: activeSideBar, toggleState: toggleActiveSideBar } = useSidebar();

    return (
        <div className="main-content-bg">
            <div className={activeSideBar ? "flex-row avatar-close-sidebar" : "flex-col-rev avatar-close-sidebar"}>
            </div>
            <div className={activeSideBar ? "container enable-animation" : "big-container enable-animation"}>
                {!activeSideBar && (
                    <svg 
                        style={{ margin: 0 }} 
                        onClick={toggleActiveSideBar} 
                        className={activeSideBar ? "small-arrow " : "small-arrow-reverce full-screen-none"} 
                        width="17" 
                        height="31" 
                        
                        viewBox="0 0 17 31" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.585786 16.9142C-0.195262 16.1332 -0.195262 14.8668 0.585786 14.0858L13.3137 1.35786C14.0948 0.576816 15.3611 0.576816 16.1421 1.35786C16.9232 2.13891 16.9232 3.40524 16.1421 4.18629L4.82843 15.5L16.1421 26.8137C16.9232 27.5948 16.9232 28.8611 16.1421 29.6421C15.3611 30.4232 14.0948 30.4232 13.3137 29.6421L0.585786 16.9142ZM3 17.5H2V13.5H3V17.5Z" />
                    </svg>
                )}
                <h2>Experience</h2>
                <ExperiaceBlock activeSideBar={activeSideBar} />
                <Projects />
                <h2>Education</h2>
                <Educations />
                <h2>Skills</h2>
                <Skills />
            </div>
        </div>
    );
};
