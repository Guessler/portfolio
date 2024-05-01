import { FC, useEffect, useRef, useState } from "react";
import arrow from "../../../assets/svg/leftArrow.svg"
import { ProjectDto } from "../types";

import hell from "../../../assets/videoplayback.mp4"
import { useSidebar } from "../../../utils/useSidebar";

// import {  SwiperSlide } from 'swiper/react';

// import 'swiper/css';

interface ProjectsProps {
    value: ProjectDto,
    // data: ProjectDto[]
}

export const Project: FC<ProjectsProps> = ({ value: { pics, webSiteName, clarification, link}}) => {
    const {isDark} = useSidebar()

    const [isHover, setIsHover] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [index, setIndex] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const onSlide = (toLeft?: boolean) => {
        if (toLeft && index > 0) {
            setIndex(index - 1);
            ref.current?.scrollTo({ left: -338, behavior: 'smooth' });
        } else if (!toLeft && index < pics.length - 1) {
            setIndex(index + 1);
            ref.current?.scrollTo({ left: 338, behavior: 'smooth' });
        }
    };

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

    return (
        <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})}  className={isDark ?"projectsPropsContainer small-margin unShadow":"projectsPropsContainer small-margin "}>
            {isDark ?<video className={isDark && isHover ? "opacity-1": "opacity-0"} ref={videoRef}  src={hell} /> : ""}
            <div className="icon-block">
                <div className="switch-container">
                    <div className="switch-container-wrapper">
                        {index > 0 && <button onClick={() => onSlide(true)} className="switch-button"><img src={arrow} alt={arrow} /></button>}
                        {index < pics.length - 1 && <button onClick={() => onSlide()} className="switch-button rigth-button"><img className="left-button" src={arrow} alt={arrow} /></button>}
                    </div>
                </div>
                <div ref={ref} className="container-icon">
                    {Array.isArray(pics) ? pics.map(pic =>
                        <img key={pic}  className="website-icon" src={pic} alt={pic} />
                    ) : <img className="website-icon" src={pics} alt={pics} />}
                </div>
            </div>
            <p>{webSiteName}</p>
            <a target="_blank" href={link}>{link}</a>
            <span >{clarification}</span>
        </div>
    )
}
