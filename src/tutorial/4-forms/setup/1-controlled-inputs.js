import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName && email) {
      console.log(firstName, email);
      const person = {
        // id: Math.random().toString(),
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      // people.push(person);
      // setPeople(people);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log(people);
    } else {
      console.log("Empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h5>{id}</h5>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
