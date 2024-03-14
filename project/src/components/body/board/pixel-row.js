import data from "data/comp-class-list.json" 

const PixelRow = (prop) => {
    const {pixels, key} = prop;
    const {
        pixelRow,
        flexRow,
    } = data;

    return (
        <div className={`${pixelRow} ${flexRow}`} key={key}>
            {pixels}
        </div>
    )
}

export default PixelRow