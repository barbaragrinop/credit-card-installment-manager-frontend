
import { useState } from 'react';

function useBoolean(initialValue: boolean = false) {
    const [currentValue, setCurrentValue] = useState(initialValue);

    function isFalse() {
        setCurrentValue(false);
    }

    function isTrue() {
        setCurrentValue(true);
    }

    return {
        currentValue,
        isFalse,
        isTrue,
    };
}

export default useBoolean;
