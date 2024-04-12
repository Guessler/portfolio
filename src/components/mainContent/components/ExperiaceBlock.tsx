import { Experience } from "./Experience"
import place from "../../../assets/place.svg"
import { FC } from "react";
import clsx from "clsx";

interface SocialProps {
    activeSideBar: boolean;
}

export const ExperiaceBlock: FC<SocialProps> = ({ activeSideBar }) => (
    <div className={clsx(activeSideBar? "Experience-proto ordinary-width": "Experience-proto closed-sidebar-width", 'enable-animation' )}>
        <Experience />
        <div className="small-margin" style={{ width: "150px"}}>
            <span>Dec 22, still working</span>
            <div style={{display: "flex", flexDirection: "row", gap: "5px"}}>
                <img src={place} alt={place} />
                <span className="name-props">Moscow, Russia</span>
            </div>
        </div>
    </div>
)