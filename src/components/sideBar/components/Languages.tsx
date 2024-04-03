import { FC, useEffect, useState } from "react";
import { Markup } from "../Markup";
import { languages } from "../consts";
import { MapToMarkupDto } from "../types";

interface SocialProps {
    activeSideBar: boolean;
}

export const Languages:FC<SocialProps> = ({ activeSideBar }) => {
    const [data, setData] = useState<MapToMarkupDto[]>([])
    useEffect(() => {
        setData(languages)
    }, [])
    return(
        data.map(item=>
            <Markup 
                leftRender={
                    <div className="main-circle">
                        <img src={item.image} alt={item.image} />
                    </div>
                }
                rightRender={
                    <div className={activeSideBar ? "small-margin": "display-none"}>
                        <p>{item.name}</p>
                        <a className="name-props">{item.desc}</a>
                    </div>
                }
            />
        )
    )
}