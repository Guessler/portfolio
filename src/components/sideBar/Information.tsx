import { ReactNode } from "react";

interface informationProps {
    children: ReactNode;
    Name?:  ReactNode;
}
function Information({children, Name}: informationProps){
    return(
        <div className="information-container">
            <div className="main-circle grey-color-circle">
                {children}
            </div>
            <div className="information-indent">
                {Name}
            </div>
        </div>
    )
}
export default Information;