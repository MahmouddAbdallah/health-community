import { useEffect, useRef } from 'react';

function useCloseOnOutsideClick(onClose) {
    const ref = useRef()
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClose();
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);
    return ref
}

export default useCloseOnOutsideClick;

