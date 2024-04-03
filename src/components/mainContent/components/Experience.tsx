import { Markup } from "../../markup"
import { useEffect, useState } from "react";
import { MapToMarkupDto } from "../../sideBar/types";
import { experience } from "../../sideBar/consts";

export const Experience = () => {
    const [data, setData] = useState<MapToMarkupDto | undefined>(undefined)

    useEffect(() => {
        setData(experience)
    }, [])

    if(!data){
        return null
    }

    return(
        <Markup 
            leftRender={
                <div className="grey-color-circle main-circle">
                    <img src={data.image} alt={data.image} />
                </div>
            }
            rightRender={
                <div className="small-margin">
                    <p>{data.name}</p>
                    <a className="name-props">{data.desc}</a>
                </div>
            }
        />
    )
}