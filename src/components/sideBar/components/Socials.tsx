import { Markup } from "../Markup";
import { MapToMarkupDto } from "../types";
import {FC, useEffect, useState } from "react";
import { socials } from "../consts";

interface SocialProps {
    activeSideBar: boolean;
}
export const Socials:FC<SocialProps> = ({ activeSideBar }) => {
    const [data, setData] = useState<MapToMarkupDto[]>([])
    useEffect(() => {
        setData(socials)
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