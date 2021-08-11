import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <p onClick={()=> { setCount(count+1); }}>
           {count} ah ah ah
        </p>
    );
};

export default Counter;