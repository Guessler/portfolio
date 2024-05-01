import {  useEffect, useRef, useState } from "react"

import banner1 from "../../assets/image 1.png"
import banner2 from "../../assets/image 2.png"
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
                webSiteName: 'Poweful Design System',
                link: 'https://sports.sharix.org',
                clarification: "Figma UI Kit and Design System targeting a wide variety of use cases."
            },
            {
                pics: banner1,
                webSiteName: 'Poweful Design System1',
                link: 'https://sports.sharix.org',
                clarification: "Figma UI Kit and Design System targeting a wide variety of use cases."
            },
            {
                pics: banner1,
                webSiteName: 'Poweful Design System2',
                link: 'https://sports.sharix.org',
                clarification: "Figma UI Kit and Design System targeting a wide variety of use cases."
            },
            {
                pics: banner1,
                webSiteName: 'Poweful Design System2',
                link: 'https://sports.sharix.org',
                clarification: "Figma UI Kit and Design System targeting a wide variety of use cases."
            },
        ])
    },[])

    return(
        <>
            <h2>Latest projects</h2>
            <div className="latest-project-wrapper">
                <div
                    ref={ref} 
                    // className={clsx("latest-project-container", isDown && "isDown")} 
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