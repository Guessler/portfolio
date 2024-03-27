import { FC, ReactNode } from "react";

interface MarkupProps {
    leftRender: ReactNode;
    rightRender: ReactNode;
}

export const Markup: FC<MarkupProps> = ({leftRender, rightRender}) => (
    <div className="information-container">
        <div className="main-circle">
            {leftRender}
        </div>
        <div className="information-indent">
            {rightRender}
        </div>
    </div>
)