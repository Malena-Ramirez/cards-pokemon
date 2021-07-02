import React, { useEffect, useState } from 'react';
import CardDetail from '../components/CardDetail';
import CardsContainer from '../components/CardsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          img: json.sprites.front_default,
          abilities: json.abilities[0].ability.name,
          experience: json.base_experience,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  const handleClick = (e) => {
    setModalShow(true);
    let id = e.target.id;
    console.log(id);
    id = parseInt(id);
    const Selected = pokemons.find(pokemon => pokemon.id === id);
    setSelectedPokemon(Selected);
  }

  return (
    <>
      <CardsContainer pokemon={pokemons} onClick={handleClick} />
      <CardDetail pokemon={selectedPokemon} show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
}
export default App;
