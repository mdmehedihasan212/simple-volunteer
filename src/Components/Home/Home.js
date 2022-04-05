import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Counter +</button>
            <button>Counter -</button>
        </div>
    );
};

export default Home;