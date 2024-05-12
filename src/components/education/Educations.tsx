import { useEffect, useState } from "react"
import { EducationDto } from "../projects/types"
import { Education } from "./Education"
import kp11 from "../../assets/svg/kp-11-logo.svg"
import w3schools from "../../assets/svg/w3schools.svg"

export const Educations = () => {
    const [data, setData] = useState<EducationDto[]>([])
    useEffect(()=>{
        setData([
            {
                pics: kp11,
                name: "kp-11",
                time: "enforced from September 2023 to present",
                moreInf: "College of Entrepreneurship 11",
                link: "https://kp11.mskobr.ru/"
            },
            {
                pics: w3schools,
                name: "w3schools",
                time: "April 2024",
                moreInf: "got three certifications in Js, Bootstrap, React ",
                link: "https://pathfinder.w3schools.com/"
            },
        ])
    },[])
    return(
        <div className="Education-wrapper">
            {data.map(item => <Education value={item} />)}
        </div>
    )
}