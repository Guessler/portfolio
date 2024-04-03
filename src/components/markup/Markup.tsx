import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MarkupProps {
    leftRender: ReactNode;
    rightRender: ReactNode;
    hideRight?: boolean;
    contanerStyles?: string;
}

export const Markup: FC<MarkupProps> = ({leftRender, rightRender, hideRight,contanerStyles}) => (
    <div className={clsx("information-container", contanerStyles)}>
        <div className="main-circle ">
            {leftRender}
        </div>
        <div className={hideRight ? "display-none" :"information-indent"}>
            {rightRender}
        </div>
    </div>
)