import data from "data/comp-class-list.json"

const HeaderComp = () => {
    const {
        flexRow
    } = data;

    return (
        <header className={flexRow}>
            <div 
                id="page-heading"
                className={flexRow}>
                <h1 >Etch-A-Sketch</h1>
            </div>
        </header>
    )
};

export default HeaderComp