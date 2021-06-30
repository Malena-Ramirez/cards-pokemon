import React , { useEffect, useState } from "react";
import Card from "./Card.jsx";


const CardsContainer = () => {
  const [pokemons,setPokemons] = useState([])

    useEffect(() => {
        const peticion = async (url) => {
            let res = await fetch(url),
              json = await res.json();
            //console.log(json);
      
            json.results.forEach(async (el) => {
              let res = await fetch(el.url),
                json = await res.json();
      
              console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                img: json.sprites.front_default,
                abilities: json.abilities[0].ability.name,
                experience:json.base_experience
              };
      
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
          };
      
          peticion("https://pokeapi.co/api/v2/pokemon/");
    }, []);
  return (
    <>
      <h1>Pokemon</h1>
      <div>
      {pokemons.length === 0 
      ? <h3>Loading Pokemons</h3> 
      :pokemons.map(el => <Card
      key={el.id} name={el.name} img={el.img} abilities={el.abilities} exp={el.experience}/>)
      }
      </div>
    </>
  );
};

export default CardsContainer;
