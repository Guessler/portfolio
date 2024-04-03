import { Markup } from "../../sideBar/Markup"
import { useEffect, useState } from "react";
import { MapToMarkupDto } from "../../sideBar/types";
import { experience } from "../../sideBar/consts";

export const Experience = () => {
    const [data, setData] = useState<MapToMarkupDto[]>([])

    useEffect(() => {
        setData(experience)
    }, [])

    return(
        data.map(item =>
            <Markup 
                leftRender={
                    <div className="grey-color-circle main-circle">
                        <img src={item.image} alt={item.image} />
                    </div>
                }
                rightRender={
                    <div className="small-margin">
                        <p>{item.name}</p>
                        <a className="name-props">{item.desc}</a>
                    </div>
                }
            />
        )
    )
}