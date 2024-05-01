import { useEffect, useRef, useState } from "react";
import hell from "../../assets/videoplayback.mp4"
import { useSidebar } from "../../utils/useSidebar";
export const Skills = () => {

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
        <div className="skills-clock">
            <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"design-skills main-border unShadow":"design-skills main-border"}>
            {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"}  ref={videoRef}  src={hell} /> : ""}
                <p>WebDesign</p>
                <div className="skills-block-line"></div>
                <p>Mobile Design</p>
            </div>
            <div className="development-skills">
                <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"development-skill-long-block top-left-radius main-border unShadow":"development-skill-long-block top-left-radius main-border"}><p>React</p>
                {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"}  ref={videoRef}  src={hell} /> : ""}</div>
                <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"development-skill-long-block main-border unShadow":"development-skill-long-block main-border"}><p>Typescript</p>
                {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"}  ref={videoRef}  src={hell} /> : ""}
                </div>
                <div className="development-base-skills">
                    <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"development-easiest-skills bottom-left-radius main-border unShadow":"development-easiest-skills bottom-left-radius main-border"}>
                    {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"}  ref={videoRef}  src={hell} /> : ""}
                        <span>HTML</span>
                        <div className="skills-block-line"></div>
                        <span>CSS</span>
                        <div className="skills-block-line"></div>
                        <span>JS</span>
                    </div>
                    <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})} className={isDark?"development-git-skills bottom-left-right-radius main-border unShadow": "development-git-skills bottom-left-right-radius main-border"}>
                    {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"} ref={videoRef}  src={hell} /> : ""}
                        <ul>
                            <li>Github</li>
                            <li>Gogs</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}