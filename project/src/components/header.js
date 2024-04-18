import data from "data/comp-class-list.json"
import useClassStringConstruct from "hooks/create-class-string";

const HeaderComp = () => {
    const handleClassString = useClassStringConstruct()
    const {
        flexRow,
        panel
    } = data;

    return (
        <header className={flexRow}>
            <div 
                id="page-heading"
                className={handleClassString([flexRow, panel])}>
                <h1 >Etch-A-Sketch</h1>
            </div>
        </header>
    )
};

export default HeaderComp