import { useEffect, useRef, useState } from "react";
import videoSource from "../../assets/videoplayback.mp4";
import { useSidebar } from "../../utils/useSidebar";

export const Skills = () => {
    const { isDark } = useSidebar();

    const [isHoverDesign, setIsHoverDesign] = useState(false);
    const [isHoverReact, setIsHoverReact] = useState(false);
    const [isHoverTypeScript, setIsHoverTypeScript] = useState(false);
    const [isHoverHTML, setIsHoverHTML] = useState(false);
    const [isHoverGit, setIsHoverGit] = useState(false);

    const videoRefDesign = useRef<HTMLVideoElement>(null);
    const videoRefReact = useRef<HTMLVideoElement>(null);
    const videoRefTypeScript = useRef<HTMLVideoElement>(null);
    const videoRefHTML = useRef<HTMLVideoElement>(null);
    const videoRefGit = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isHoverDesign) {
            videoRefDesign.current?.play();
        } else {
            videoRefDesign.current?.pause();
        }
    }, [isHoverDesign]);

    useEffect(() => {
        if (isHoverReact) {
            videoRefReact.current?.play();
        } else {
            videoRefReact.current?.pause();
        }
    }, [isHoverReact]);
    useEffect(() => {
        if (isHoverTypeScript) {
            videoRefTypeScript.current?.play();
        } else {
            videoRefTypeScript.current?.pause();
        }
    }, [isHoverTypeScript]);
    useEffect(() => {
        if (isHoverHTML) {
            videoRefHTML.current?.play();
        } else {
            videoRefHTML.current?.pause();
        }
    }, [isHoverHTML]);

    useEffect(() => {
        if (isHoverGit) {
            videoRefGit.current?.play();
        } else {
            videoRefGit.current?.pause();
        }
    }, [isHoverGit]);

    return (
        <div className="skills-clock">
            <div
                onMouseEnter={() => setIsHoverDesign(true)}
                onMouseLeave={() => setIsHoverDesign(false)}
                className={isDark ? "design-skills main-border unShadow" : "design-skills main-border"}
            >
                {isDark && isHoverDesign && <video className="opacity-1" ref={videoRefDesign} src={videoSource} />}
                <p>Web Design</p>
                <div className="skills-block-line"></div>
                <p>Mobile Design</p>
            </div>

            <div className="development-skills">
                <div
                    onMouseEnter={() => setIsHoverReact(true)}
                    onMouseLeave={() => setIsHoverReact(false)}
                    className={isDark ? "development-skill-long-block top-left-radius main-border unShadow" : "development-skill-long-block top-left-radius main-border"}
                >
                    <p>React</p>
                    {isDark && isHoverReact && <video className="opacity-1" ref={videoRefReact} src={videoSource} />}
                </div>

                <div
                    onMouseEnter={() => setIsHoverTypeScript(true)}
                    onMouseLeave={() => setIsHoverTypeScript(false)}
                    className={isDark ? "development-skill-long-block main-border unShadow" : "development-skill-long-block main-border"}
                >
                    <p>typescript</p>
                    {isDark && isHoverTypeScript && <video className="opacity-1" ref={videoRefTypeScript} src={videoSource} />}
                </div>

                <div className="development-base-skills">
                    <div
                        onMouseEnter={() => setIsHoverHTML(true)}
                        onMouseLeave={() => setIsHoverHTML(false)}
                        className={isDark ? "development-easiest-skills bottom-left-radius main-border unShadow" : "development-easiest-skills bottom-left-radius main-border"}
                    >
                        {isDark && isHoverHTML && <video className="opacity-1" ref={videoRefHTML} src={videoSource} />}
                        <span>HTML</span>
                        <div className="skills-block-line"></div>
                        <span>CSS</span>
                        <div className="skills-block-line"></div>
                        <span>JS</span>
                    </div>

                    <div
                        onMouseEnter={() => setIsHoverGit(true)}
                        onMouseLeave={() => setIsHoverGit(false)}
                        className={isDark ? "development-git-skills bottom-left-right-radius main-border unShadow" : "development-git-skills bottom-left-right-radius main-border"}
                    >
                        {isDark && isHoverGit && <video className="opacity-1" ref={videoRefGit} src={videoSource} />}
                        <ul>
                            <li>Github</li>
                            <li>Gogs</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
