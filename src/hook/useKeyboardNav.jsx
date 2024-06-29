import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'

const useKeyboardNav = (length, items) => {
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const navigate = useNavigate()
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowDown') {
            setFocusedIndex(prevIndex => (prevIndex + 1) % length);
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            setFocusedIndex(prevIndex => (prevIndex === 0 ? length - 1 : prevIndex - 1));
            event.preventDefault();
        } else if (event.key === 'Enter' && focusedIndex >= 0) {
            event.preventDefault()
            navigate(`/search?keyword=${items[focusedIndex]?.keyword}&type=${items[focusedIndex]?.type}`);
            window.location.reload()
        }
    }, [focusedIndex, items, length, navigate]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return [focusedIndex, setFocusedIndex,];
};

export default useKeyboardNav;
