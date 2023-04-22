const Footer = () => {
    const date = new Date().getFullYear();

    return(
    <>
        <a href="https://github.com/Ben-E-Price" className="flex-row">
            <p>Ben Price {date}</p>
            <img src="images/GitHub-Mark-64px.png" id="logo-git"></img>
        </a>
    </>
    )
};

export default Footer;