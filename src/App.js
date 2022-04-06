import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header-section/Header";
import Main from "./components/main-section/Main";
import Axios from "axios";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(50);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100012").then(
      (response) => {
        const responseJSON = response.data.results;
        const temp = [];
        for (let i = 0; i < 500; i++) {
          temp.push({
            id: responseJSON[i].url.split("/").reverse()[1],
            name: responseJSON[i].name,
            url: responseJSON[i].url,
          });
        }
        setPokemonData(temp);
      }
    );
  }, []);

  function searchOnChange(event) {
    setSearchInput(event.target.value);
  }

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  function changeCurrentPage(pageNumber) {
    setCurrentPage(pageNumber);
    setSearchInput("");
  }

  return (
    <div className="app">
      <Header searchInput={searchInput} searchOnChange={searchOnChange} />
      <Main
        pokemonData={pokemonData}
        searchInput={searchInput}
        indexOfFirstPokemon={indexOfFirstPokemon}
        indexOfLastPokemon={indexOfLastPokemon}
      />
      <Pagination
        noOfPokemons={pokemonData.length}
        pokemonsPerPage={pokemonsPerPage}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
