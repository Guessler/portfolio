import { FC } from "react"
import arrow from "../../assets/leftArrow.svg"
interface ProjectsProps{
    webSiteCard: string,
    webSiteName: string,
    clarification: string,
    link: string,
}
export const Projects:FC<ProjectsProps> = ({ webSiteCard, webSiteName, link, clarification}) => {
    return(
        <div>
            <div className="projectsPropsContainer small-margin">
                <div className="icon-block">
                    <div className="switch-container">
                    <button className="switch-button"><img src={arrow} alt={arrow} /></button>
                    <button className="switch-button "><img className="left-button" src={arrow} alt={arrow}/></button>
                    </div>
                <img className="website-icon" src={webSiteCard} alt={webSiteCard} />
                </div>
                <p>{webSiteName}</p>
                <a href={link}>{ link }</a>
                <span >{clarification}</span>
            </div>
        </div>
    )
}