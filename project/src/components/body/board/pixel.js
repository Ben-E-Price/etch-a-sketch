function Pixel(prop) {
    //Generate pixel sizing based on pixelboard sizing
    function generateSize(boardSize, pixelCount) {
        const pixelSize = boardSize  / pixelCount;
        
        return {
            width: pixelSize,
            height: pixelSize
        };
    };

    return(
        <div className='pixel' style={{...generateSize(prop.boardSize, prop.pixelNum)}}>
        </div>
    )
};

export default Pixel;