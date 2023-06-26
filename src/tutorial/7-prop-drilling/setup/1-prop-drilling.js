import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)


const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const remove = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <section>
        <h3>prop Drilling</h3>
        <List people={people} remove={remove} />
      </section>
    </>
  );
};

const List = ({ people, remove }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} remove={remove} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, remove }) => {
  return (
    <div className="item">
      <h4>{id}</h4>
      <h4>{name}</h4>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        remove
      </button>
    </div>
  );
};
export default PropDrilling;
