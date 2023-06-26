import React, { useState } from "react";

//! hooks general rules.
// use
// component name must be uppercase
//must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const setValueHandler = useState(1)[1];
  // console.log(setValueHandler);
  const [text, setText] = useState("UseState Basic Example");
  const setTextHandler = () => {
    if (text === "UseState Basic Example") {
      setText("Random Title");
    } else {
      setText("UseState Basic Example");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={setTextHandler}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
