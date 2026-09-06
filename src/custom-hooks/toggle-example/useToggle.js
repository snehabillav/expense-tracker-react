import { useState } from "react";

function useToggle() {
    const [isOn, setIsOn] = useState(false);
    return{
            isOn,
            setIsOn
    };
}

export default useToggle;