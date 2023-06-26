import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  const getData = async () => {
    try {
      const response = await fetch(url);
      if (response.status > 299) {
        setIsLoading(false);
        setIsError(true);
      }
      const user = await response.json();
      const { login } = user;
      setUser(login);
      setIsLoading(false);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
