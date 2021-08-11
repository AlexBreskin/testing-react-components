import React, { useState } from 'react';

const CounterAsync = () => {
    const [count, setCount] = useState(0);

    return (
        <p onClick={()=> { setTimeout(()=> { setCount(count+1); }, 1000)}}>
           {count} ah ah ah
        </p>
    );
};

export default CounterAsync;