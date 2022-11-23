import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)

  const changeName = (e) => {
      // setPerson({ name: e.target.value, age: person.age });
      setPerson({ ...person, name: e.target.value });
  }
  const changeAge = (e) => {
    // setPerson({ name: person.name, age: e.target.value });
    setPerson({ ...person, age: e.target.value });
  }
  const reset = () => {
    setPerson({ name: "", age: "" });
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <div><input type="text" onChange={changeName} value={person.name} /></div>
      <div><input type="number" onChange={changeAge} value={person.age} /></div>
      <button onClick={reset}>リセット</button>
    </>
  )

};

export default Example;
