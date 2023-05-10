function Pixel(prop) {
    // const sizeString = prop.sizing
    
    return(
        <div className='pixel' style={{width: prop.sizing, height: prop.sizing}}>
        </div>
    )
};

export default Pixel;