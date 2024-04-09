import data from "data/comp-class-list.json"

const Footer = () => {
    const {
        flexRow,
    } = data;
    const date = new Date().getFullYear();

    return(
    <footer className={flexRow}>
        <div id="link-wrapper"
            className={flexRow}
        >
            <a href="https://github.com/Ben-E-Price"
                className={flexRow}
                id="git-link"
            >
                <p>Ben Price {date}</p>
                <img src="images/GitHub-Mark-64px.png" id="logo-git"></img>
            </a>
        </div>
    </footer>
    )
};

export default Footer;