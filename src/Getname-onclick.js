import { useState } from 'react';

const InputField = () => {
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [fullName, setFullName] = useState();
    const [fullName2, setFullName2] = useState();
    const inputEvent2 = (event) => {
      setName2(event.target.value);
    }
    const inputEvent = (event) => {
    setName(event.target.value);

    }
    const clickEvent = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullName2(name2);
    }
    
      return(
        <>
        <form onSubmit={clickEvent}>
        <h1>Hello {fullName} {fullName2}</h1>
        <input type="text" onChange={inputEvent} value={name}/>
        <input type="text" onChange={inputEvent2} value={name2}/>
        <button type="submit">Click Me</button>
        </form>
        </>
      );
    }

    export default InputField;