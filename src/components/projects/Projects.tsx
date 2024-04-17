import {  useEffect, useState } from "react"

import banner1 from "../../assets/image 1.png"
import banner2 from "../../assets/image 2.png"
import { Project } from "./components/Project"
import { ProjectDto } from "./types"


export const Projects = () => {

    const [data, setData]  = useState<ProjectDto[]>([])

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
            <div className="latest-project-container">
                {data.map(item => <Project key={item.webSiteName} value={item} />)}
            </div>
        </>
    )
}