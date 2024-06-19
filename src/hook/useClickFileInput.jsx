import { useEffect, useCallback } from 'react';

const useClickFileInput = (btnRef, inputFileRef) => {
    const clickFileHandler = useCallback(() => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    }, [inputFileRef]);

    useEffect(() => {
        const btn = btnRef.current;
        if (btn) {
            btn.addEventListener('click', clickFileHandler);
        }

        return () => {
            if (btn) {
                btn.removeEventListener('click', clickFileHandler);
            }
        };
    }, [btnRef, clickFileHandler]);
};

export default useClickFileInput;