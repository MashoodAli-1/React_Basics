import React, { useState } from "react";

const UseStateObject = () => {
  const object = { name: "mashood ali", age: 21, msg: "Random msg" };
  const [person, setPerson] = useState(object);
  // console.log(person);
  const setPersonHandler = () => {
    //! first  copy  the old object using spread operator than edit the properties
    setPerson({ ...person, age: 20, msg: "msg Changed" });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.msg}</h2>
      <button type="button" className="btn" onClick={setPersonHandler}>
        Edit
      </button>
    </>
  );
};

export default UseStateObject;
