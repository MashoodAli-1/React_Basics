import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    //!clean up function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h1>{size} PX</h1>
    </>
  );
};

export default UseEffectCleanup;
