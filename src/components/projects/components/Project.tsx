import { FC, useEffect, useRef, useState } from "react";
import arrow from "../../../assets/svg/leftArrow.svg"
import { ProjectDto } from "../types";

import hell from "../../../assets/videoplayback.mp4"
import { useSidebar } from "../../../utils/useSidebar";

import {  SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface ProjectsProps {
    value: ProjectDto
}

export const Project: FC<ProjectsProps> = ({ value: { pics, webSiteName, clarification, link } }) => {
    const {isDark} = useSidebar()

    const [isHover, setIsHover] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const ref = useRef<HTMLDivElement>(null)

    const onSlide = (toLeft?: boolean) => {
        if (toLeft) {
            ref.current?.scrollTo({ left: -338, behavior: 'smooth' })
            return
        }
        ref.current?.scrollTo({ left: 338, behavior: 'smooth' })
    }
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
        <SwiperSlide>
        <div onMouseEnter={(() => setIsHover(true))} onMouseLeave={(()=>{ setIsHover(false)})}  className={isDark ?"projectsPropsContainer small-margin unShadow":"projectsPropsContainer small-margin "}>
            {isDark ?<video  ref={videoRef}  src={hell} /> : ""}
            <div className="icon-block">
                <div className="switch-container">
                    <button onClick={() => onSlide(true)} className="switch-button"><img src={arrow} alt={arrow} /></button>
                    <button onClick={() => onSlide()} className="switch-button "><img className="left-button" src={arrow} alt={arrow} /></button>
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
        </SwiperSlide>
    )
}