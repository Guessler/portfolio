import { ReactNode } from "react";
interface informationProps {
    children: ReactNode;
    Name:  ReactNode;
}
function Languages({children,Name}:informationProps){
    
    return(
        <div className="information-container">
                {children}
            <div className="information-indent">
                {Name}
            </div>
        </div>
    )
}
export default Languages;