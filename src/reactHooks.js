import React, { useState } from 'react';
const GetCount = () => {
    const [count, setCount] = useState(0);
    
    const incNum = () => {
    setCount (count+1);
    }
    return(
    <>
    <h1>{count}</h1>
    <button onClick={incNum}>Click me</button>
    </>
    );
    };
export default GetCount;
