
const useClassStringConstruct = () => {

    //Create string containing mutiple HTML class names
    const handleClassStrings = (inStrings) => {

        // Remove values not of type string
        const cleanArray = (checkArray) => {
            const checkType = (check) => check === typeof "string" ? true : false;  

            const cleanArray = checkArray.filter((value) => checkType(value));
            return cleanArray
        };
    };

    return {handleClassStrings}
}