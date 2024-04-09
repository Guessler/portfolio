import { FC } from "react"


interface EducationProps{
    icon: string,
    Enterprise: string,
    year: string,
    clarification: string,
}

export const Education:FC<EducationProps> = ({ icon, Enterprise, year,clarification}) =>{
    return(
        <div className="education-container">
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