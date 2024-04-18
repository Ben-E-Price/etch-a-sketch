import data from "data/comp-class-list.json"
import useClassStringConstruct from "hooks/create-class-string";

const Footer = () => {
    const handleClassString = useClassStringConstruct();
    const {
        flexCol,
        flexRow,
        gitLink,
        gitLogo
    } = data;
    const date = new Date().getFullYear();

    return(
    <footer className={flexRow}>
        <div id="prof-wrapper"
            className={flexCol}
        >
            <div id="git-wrapper"
                className={flexRow}
            >
                <span 
                    id="logo-wrapper"
                    className={flexRow}
                >
                    <img 
                        src="images/GitHub-Logo.svg"
                        id="git-logo-text"
                        className={gitLogo}/>
                    <img 
                        src="images/GitHub-Mark-64px.png"
                        id="git-logo-cat"
                        className={gitLogo}/>
                </span>
                
                <span 
                    id="link-wrapper"
                    className={flexCol}
                >                    
                    <a
                        href="https://github.com/Ben-E-Price"
                        className={gitLink}
                    >
                        <h4 id="git-link-prof"> Git Profile </h4>
                    </a>

                    <a
                        href="https://github.com/Ben-E-Price"
                        className={gitLink}
                    >
                        <h4 id="git-link-repo"> Project Repo </h4>
                    </a>
                </span>
            </div>

            <p>Ben Price {date}</p>

        </div>
    </footer>
    )
};

export default Footer;