import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>Value: {secondValue}</h2> */}
      <h3>{text || "mashood ali"}</h3>
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>
      {/* {text && <h1>hello world</h1>}
      {!text && <h1>hello</h1>} */}
      {isError && <h1>Error...</h1>}
      {isError ? <h1>Error...</h1> : <p>Text is here</p>}
    </>
  );
};

export default ShortCircuit;
