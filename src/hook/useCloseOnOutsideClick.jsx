import { useEffect, useRef } from 'react';

function useCloseOnOutsideClick(onClose) {
    const ref = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [onClose]);
    return ref
}

export default useCloseOnOutsideClick;

