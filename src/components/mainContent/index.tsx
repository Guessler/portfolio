import "./style.css"
import ShariXLogo from "../../assets/big-sharix 1.svg"
import place from "../../assets/place.svg"
import experiaceBlock from "./experiaceBlock"
function MainContent(){
    return(
        <div className="main-content-bg">
            <div className="container">
            <h2>Experience</h2>
            <div className="Experience-proto">
                <div className="flex-row ">
                <img src={ShariXLogo} alt={ShariXLogo} />
                <div className="flex-col information-indent small-margin">
               <p>Frontend developer</p>
               <p>ShariX</p>
               </div>
               </div>
               <experiaceBlock>
                asdas
               </experiaceBlock>
               {/* <div className="flex-col small-margin">
               <span>Dec 22, still working</span>
               <span className="flex-row">
               <img style={{marginRight: '2px'}} src={place} alt={place} />
               <span>Moscow, Russia</span>
               </span>
               </div> */}
            </div>
            <h2>Latest projects</h2>
            <h2>Education</h2>
            <h2>Skills</h2>
            </div>
        </div>
    )
}
export default MainContent;