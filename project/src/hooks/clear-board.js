import data from "../data/comp-class-list.json"

const useClearBoard = () => {
    const {
        activeBackground
    } = data;

    const handleClick = () => {
        const activePixels = [...document.getElementsByClassName(activeBackground)];

        const clearPixel = (pixel, className) => {
            pixel.style.background = "none";
            pixel.classList.remove(className);
        };
        
        activePixels.forEach((element) => clearPixel(element, activeBackground));
    };

    return handleClick
};

export default useClearBoard