import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const setPeopleHandler = () => {
    setPeople([]);
  };
  const removeItemHandler = (id) => {
    //! one  method
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    //! alternative approach
    // setPeople((oldPeople) => {
    //   let newPeople = oldPeople.filter((person) => person.id !== id);
    //   return newPeople;
    // });
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button
              type="button"
              className="btn"
              onClick={() => removeItemHandler(id)}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={setPeopleHandler}>
        Clear Array
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
