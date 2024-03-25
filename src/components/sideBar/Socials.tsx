import { ReactNode } from "react";
interface informationProps {
    children: ReactNode;
    Name?:  ReactNode;
}
function Socials({children,Name}:informationProps){
    return(
        <div className="information-container">
            <div className="main-circle instagram">
                {children}
            </div>    
            <div className="information-indent">
                {Name}
            </div>
        </div>
    )
}
export default Socials;