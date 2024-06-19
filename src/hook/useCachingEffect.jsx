import { useEffect } from "react";

function setExpirationTime(deltaTime, keyword) {
    const now = new Date();
    const futureTime = new Date(now.getTime() + deltaTime); // deltaTime = 2 * 60 * 60 * 1000
    const expirationTime = localStorage.getItem(`${keyword}_expirationTime`);
    if (!expirationTime) {
        localStorage.setItem(`${keyword}_expirationTime`, futureTime.getTime());
    }
}

function checkExpiration(keyword) {
    const expirationTime = localStorage.getItem(`${keyword}_expirationTime`);
    if (expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime > parseInt(expirationTime)) {
            localStorage.removeItem(`${keyword}_expirationTime`);
            localStorage.removeItem(keyword);
            window.location.reload();
        }
    }
}

export const useCachingEffect = (keyword, method, dep, deltaTime) => {
    useEffect(() => {
        setExpirationTime(deltaTime, keyword);
        const intervalId = setInterval(() => checkExpiration(keyword), 1000);
        return () => clearInterval(intervalId);
    }, [deltaTime, keyword]);

    useEffect(() => {
        const cachedData = localStorage.getItem(keyword);
        if (!cachedData) {
            method().then((data) => {
                localStorage.setItem(keyword, JSON.stringify(data));
            });
        }
    }, [dep, keyword, method]);
};
