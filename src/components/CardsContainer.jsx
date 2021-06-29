import React from "react";
import SingleCard from "./SingleCard.jsx";

const CardsContainer = (props) => {
  return (
    <>
      <h1>Pokemon</h1>
      <div>
        <SingleCard onClick={props.onClick} />
      </div>
    </>
  );
};

export default CardsContainer;
