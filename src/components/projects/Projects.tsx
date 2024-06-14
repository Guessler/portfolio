import {  useEffect, useRef, useState } from "react"

import banner1 from "../../assets/image 1.png"
import banner2 from "../../assets/image 2.png"

import daticyIconHeader from "../../assets/Dentistry/image 7.png"
import daticyIconFooter from "../../assets/Dentistry/image 8.png"

import resumeTopLight from "../../assets/resume/image 15.png"
import resumeTopDark from "../../assets/resume/image 14.png"

import resumeBottomLight from "../../assets/resume/image 16.png"
import resumeBottomDark from "../../assets/resume/image 17.png"

import { Project } from "./components/Project"
import { ProjectDto } from "./types"
import clsx from "clsx"

// import { Swiper } from 'swiper/react';
// import 'swiper/css';


export const Projects = () => {

    const [data, setData]  = useState<ProjectDto[]>([])
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [clickX, setClickX] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_isMoved, setIsMoved] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent) => {
        if(!ref.current ) return 
        setIsDown(true);
        setClickX(e.clientX)
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
      };
    
      const handleMouseLeave = () => {
        setIsDown(false);
      };
    
      const handleMouseUp = () => {
        setIsDown(false);
      };
    
      const handleMouseMove = (e: React.MouseEvent) => {
        if(!ref.current ) return 
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        if(e.pageX === clickX){
            setIsMoved(false)
            return 
        }
        setIsMoved(true)
        const walk = (x - startX) * 0.8; 
        ref.current.scrollLeft = scrollLeft - walk;
      };
    

    useEffect(() => {
        setData([
            {
                pics: [banner1, banner2],
                webSiteName: 'Sharix Sport Friend',
                link: 'https://aboba123.github.io/SportFriend/',
                clarification: "A good, and most importantly quality multi-page project written in HTML, CSS and JS."
            },
            {
                pics: [daticyIconHeader, daticyIconFooter],
                webSiteName: 'Dentistry of Dr. Ordzhonikidze',
                link: 'https://dr-ordzhonikidze.ru/',
                clarification: "The header and footer are not particularly attractive, but they are written very well."
            },
            {
                pics: [resumeTopLight, resumeTopDark, resumeBottomLight, resumeBottomDark],
                webSiteName: 'Resume',
                link: 'this web-site',
                clarification: "A project written in React, including information about my expertise"
            },

        ])
    },[])

    return(
        <>
            <h2>Latest projects</h2>
            <div className="latest-project-wrapper">
                <div
                    ref={ref} 
                    className={clsx("latest-project-container")} 
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {data.map(item => <Project key={item.webSiteName} value={item} />)}
                </div>
            </div>
        </>
    )
}