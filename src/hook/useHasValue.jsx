import { useState, useEffect } from 'react';

function useHasValue(obj) {
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        const valueExists = Object.values(obj).some(
            value => value !== undefined && value !== null
        );
        setHasValue(valueExists);
    }, [obj]);

    return hasValue;
}

export default useHasValue;