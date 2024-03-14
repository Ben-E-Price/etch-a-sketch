import data from "data/comp-class-list.json"

const HeaderComp = () => {
    const {
        flexRow
    } = data;

    return (
        <header className={flexRow}>
            <h1>Etch-A-Sketch</h1>
        </header>
    )
};

export default HeaderComp