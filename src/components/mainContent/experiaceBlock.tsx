import {FC} from "react"
import place from "../../assets/place.svg"


interface ExperiaceBlockProps {
    name: string;
    timeWorking?: string;
    placeWorking?: string;
}

export const ExperiaceBlock: FC<ExperiaceBlockProps>  = ({ name, timeWorking, placeWorking }) => (
    <div className="Experience-proto">
        <div className="flex-row ">
        {/* <img src={ShariXLogo} alt={ShariXLogo} /> */}
        <div className="flex-col information-indent small-margin">
            <p>{name}</p>
        </div>
        </div>
        <div className="flex-col small-margin">
            <span>{timeWorking}</span>
            <span className="flex-row">
                <img style={{marginRight: '2px'}} src={place} alt={place} />
                <span>{placeWorking}</span>
            </span>
        </div>
    </div>
)