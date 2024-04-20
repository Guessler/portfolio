import { FC, useEffect, useRef, useState } from "react"

import hell from "../../assets/videoplayback.mp4"
import { useSidebar } from "../../utils/useSidebar"
interface EducationProps{
    icon: string,
    Enterprise: string,
    year: string,
    clarification: string,
}

export const Education:FC<EducationProps> = ({ icon, Enterprise, year,clarification}) =>{

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
    
    return(
        <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"education-container unShadow":"education-container"}>
            {isDark ?<video  ref={videoRef}  src={hell} /> : ""}
            <div className="education-container-logo">
                <img src={icon} alt={icon} />
                <p className="enterprise-name">{Enterprise}</p>
            </div>
            <div className="education-container-clarification">
                <span>{year}</span>
                <span>{clarification}</span>
            </div>
        </div>
    )
}