import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  if (action.type === "Add") {
    const newItem = [...state.people, action.payLoad];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }
  if (action.type === "close") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "remove") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payLoad
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item removed",
    };
  }
};

const defaultState = {
  people: [...data],
  isModalOpen: false,
  modalContent: "hello world",
};

const Index = () => {
  //! one appproach using states
  // const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name) {
  //     setShowModal(true);
  //     setPeople([
  //       ...people,
  //       { id: new Date().getTime().toString(), name: name },
  //     ]);
  //     setName("");
  //   } else {
  //     setShowModal(true);
  //   }
  // };

  //! second method using reducer
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "Add", payLoad: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "close" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "remove", payLoad: id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
