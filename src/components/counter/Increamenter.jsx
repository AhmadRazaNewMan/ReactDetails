import React, { useState, useEffect } from 'react';

const Increamenter = () => {
    const [stop, setStop] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let intervalId;
        if (!stop) {
            intervalId = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [stop]);

    const toggleStop = () => {
        setStop(prevStop => !prevStop);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={toggleStop}>{stop ? 'Start' : 'Stop'}</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Increamenter;
