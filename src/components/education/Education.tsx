import { FC, useEffect, useRef, useState } from "react"

import hell from "../../assets/videoplayback.mp4"
import { useSidebar } from "../../utils/useSidebar"
import { EducationDto } from "../projects/types";

interface EducationProps{
    value: EducationDto;
}

export const Education:FC<EducationProps> = ({ value }) => {

    const { pics, name, time, moreInf, link} = value

    const {isDark} = useSidebar()

    const [isHover, setIsHover] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    
    useEffect(() => {
        if (isHover) {
            videoRef.current?.play()
        }
        else {
            videoRef.current?.pause()
        }
    }, [isHover])

    useEffect(() => {
        videoRef.current?.pause()
    }, [])
    
    const openLink = () => {
        window.open(link, "_blank");
    };
    return(
        <div onClick={openLink} onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})}  className={isDark?"education-container unShadow":"education-container"}>
            {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"}  ref={videoRef}  src={hell} /> : ""}
            <div className="education-container-logo">
                <img src={pics} alt={pics} />
                <p className="enterprise-name">{name}</p>
            </div>
            <div className="education-container-clarification">
                <span className="learning-time">{time}</span>
                <span className="learning-time">{moreInf}</span>
            </div>
        </div>
    )
}