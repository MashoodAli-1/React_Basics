import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default Name");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === Number(id));
    setName(newPerson.name);
  }, []);
  console.log(useParams());
  return (
    <div>
      <h2>{name}</h2>
      <Link to={"/people"} className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
