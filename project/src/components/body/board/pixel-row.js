
const PixelRow = (prop) => {
    const {pixels, key} = prop;

    return (
        <div className="pixel-row flex-row" key={key}>
            {pixels}
        </div>
    )
}

export default PixelRow