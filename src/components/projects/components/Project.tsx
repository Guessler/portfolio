import { FC, useRef } from "react";
import arrow from "../../../assets/leftArrow.svg"
import { ProjectDto } from "../types";


interface ProjectsProps{
    value: ProjectDto
}

export const Project: FC<ProjectsProps> = ({value: {pics, webSiteName, clarification, link} }) => {

    const ref = useRef<HTMLDivElement>(null)

    const onSlide = (toLeft?: boolean) => {
        if(toLeft){
            ref.current?.scrollTo({left: -338, behavior: 'smooth'})
            return
        }
        ref.current?.scrollTo({left: 338, behavior: 'smooth'})
    }

    return (
        <div className="projectsPropsContainer small-margin">
            <div className="icon-block">
                <div className="switch-container">
                    <button  onClick={() => onSlide(true)} className="switch-button"><img src={arrow} alt={arrow} /></button>
                    <button  onClick={() => onSlide()} className="switch-button "><img className="left-button" src={arrow} alt={arrow}/></button>
                </div>
                <div ref={ref} className="container-icon">
                    {Array.isArray(pics) ? pics.map(pic => 
                    <img className="website-icon" src={pic} alt={pic} />
                    ) : <img className="website-icon" src={pics} alt={pics} />}
                </div>
            </div>
            <p>{webSiteName}</p>
            <a href={link}>{ link }</a>
            <span >{clarification}</span>
        </div>
    )
}