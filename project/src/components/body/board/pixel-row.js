
const PixelRow = (prop) => {
    const {pixels, key} = prop;

    return (
        <span className="pixel-row" key={key}>
            {pixels}
        </span>
    )
}

export default PixelRow