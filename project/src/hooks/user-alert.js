import { useState } from "react";

const useUserAlert = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [blockedFn, setBlockedFn] = useState({
        fn: false,
        args: [],
    })
};

export default useUserAlert