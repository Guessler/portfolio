import {ReactNode} from "react"

interface experiaceBlockProps {
    children: ReactNode;
    
}

function experiaceBlock({children}:experiaceBlockProps){
    return(
        <div>
            {children}
        </div>
    )
}
export default experiaceBlock;