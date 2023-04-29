function Pixel(prop) {
    const sizeString = prop.sizing
    
    return(
        <div className='pixel' style={{width: sizeString, height: sizeString}}>
        </div>
    )
};

export default Pixel;