import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decreaseCount}>Counter -</button>
            <button onClick={increaseCount}>Counter +</button>
        </div>
    );
};

export default Home;