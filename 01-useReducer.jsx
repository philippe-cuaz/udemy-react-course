import React from "react";
import { data } from "../../../data";
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  let count = 0;
  const reset = () => {
    setPeople(data);
  };


  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        count = count + 1;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
           
            <button
              onClick={() => {
                removeItem(id);
                count = count - 1;
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          count ? setPeople([]) : reset();
        }}
      >
        {count ? "clear items" : "reset"}
      </button>
    </div>
  );
};

export default ReducerBasics;
