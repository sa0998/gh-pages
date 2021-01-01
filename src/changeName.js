import React, { useState } from 'react';
const ChangeName = () => {
    const[name, setName] = useState("click me");
    const changeName = () => {
      setName("Ali");
    }
    return(
      <>
      <button onClick= {changeName}>{name}</button>
      </>
    );
  }

  export default ChangeName;