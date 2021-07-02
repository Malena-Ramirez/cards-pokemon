import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleCard from "./SingleCard.jsx";

const CardsContainer = (props) => {
  return (
    <>
      <h1>Pokemon</h1>
      <CardGroup>{props.pokemon.length === 0 ? <h3>Loading Pokemons</h3> : props.pokemon.map((el) => <SingleCard key={el.id} name={el.name} img={el.img} abilities={el.abilities} exp={el.experience} id={el.id} onClick={props.onClick} />)}</CardGroup>
    </>
  );
};

export default CardsContainer;
