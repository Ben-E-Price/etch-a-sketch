
const useClassStringConstruct = () => {

    //Create string containing mutiple HTML class names
    const handleClassString = (inStrings) => {
        // Remove none string values
        const cleanArray = (checkArray) => {
            const checkType = (check) => typeof check ===  "string" ? true : false
            
            const cleanArray = checkArray.filter((value) => checkType(value));
            return cleanArray
        };

        // Ensure HTML class naming standards - "class-naming"
        const cleanString = (inString) => inString.trim().replace(" ", "-").toLowerCase();

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

    return handleClassString
}

export default useClassStringConstruct