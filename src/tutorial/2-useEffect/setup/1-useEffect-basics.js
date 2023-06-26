import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  //! this will run when ever value changes
  useEffect(() => {
    console.log("use Effect call");
    if (value > 0) {
      document.title = `New Message (${value})`;
    }
  }, [value]);

  // this will only call/render once due to empty  dependency list
  useEffect(
    () => {
      console.log("this  will only call once");
    },
    [
      /* dependency list */
    ]
  );
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
