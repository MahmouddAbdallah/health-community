import { useCallback, useEffect, useRef } from 'react';

function useCloseOnOutsideClick(onClose) {
    const ref = useRef()
    const handleClickOutside = useCallback((event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClose();
        }
    }, [onClose, ref])
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);
    return ref
}

export default useCloseOnOutsideClick;

