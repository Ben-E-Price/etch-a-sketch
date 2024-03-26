
const useClassStringConstruct = () => {

    //Create string containing mutiple HTML class names
    const handleClassStrings = (inStrings) => {

        // Remove none string values
        const cleanArray = (checkArray) => {
            const checkType = (check) => check === typeof "string" ? true : false;  

            const cleanArray = checkArray.filter((value) => checkType(value));
            return cleanArray
        };

        // Ensure HTML class naming standards - "class-naming"
        const cleanString = (inString) => {
            return inString.trim().replace(" ", "-").toLower()
        }

        // Return, type is not array - empty array  
        if(!Array.isArray(inStrings) || inStrings.length === 0) {
            return
        };

        const classStrings = cleanArray(inStrings);
        classStrings.forEach(element => cleanString(element));

        if(classStrings.length === 1) {
            //Single string present
            return classStrings[0]
        } else {
            // Multiple strings present
            return classStrings.join(" ")
        };
    };

    return {handleClassStrings}
}