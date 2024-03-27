import {ReactNode} from "react"
import place from "../../assets/place.svg"

interface experiaceBlockProps {
    children: ReactNode;
    timeWorking: ReactNode;
    placeWorking: ReactNode;
}

function experiaceBlock({ children, timeWorking, placeWorking }:experiaceBlockProps){
    return(
        <div className="Experience-proto">
        <div className="flex-row ">
        {/* <img src={ShariXLogo} alt={ShariXLogo} /> */}
        <div className="flex-col information-indent small-margin">
       <p>{children}</p>
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
}
export default experiaceBlock;