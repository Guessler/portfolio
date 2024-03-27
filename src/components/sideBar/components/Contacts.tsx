import { Markup } from "../Markup";

import { useEffect, useState } from "react";
import { MapToMarkupDto } from "../types";
import { contacts } from "../consts";

export const Contacts = () => {

    const [data, setData] = useState<MapToMarkupDto[]>([])

    useEffect(() => {
        setData(contacts)
    }, [])

    return (
        data.map(item =>
            <Markup 
                leftRender={
                    <div className="grey-color-circle">
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