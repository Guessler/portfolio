export const Skills = () => {
    return(
        <div className="skills-clock">
            <div className="design-skills main-border">
                <p>WebDesign</p>
                <div className="skills-block-line"></div>
                <p>Mobile Design</p>
            </div>
            <div className="development-skills">
                <div className="development-skill-long-block top-left-radius main-border"><p>React</p></div>
                <div className="development-skill-long-block main-border"><p>Typescript</p></div>
                <div className="development-base-skills">
                    <div className="development-easiest-skills bottom-left-radius main-border">
                        <span>HTML</span>
                        <div className="skills-block-line"></div>
                        <span>CSS</span>
                        <div className="skills-block-line"></div>
                        <span>JS</span>
                    </div>
                    <div className="development-git-skills bottom-left-right-radius main-border">
                        <ul className="">
                            <li>Github</li>
                            <li>Gogs</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}