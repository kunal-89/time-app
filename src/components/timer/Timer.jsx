import { useState, useEffect } from 'react';
import "./style.css";

const Timer = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <span>
            {date.toLocaleTimeString('en-US')}
        </span>
    );
}

export default Timer;
