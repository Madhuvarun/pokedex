import React from "react";
import CardContainer from "./card-container-section/CardContainer";
import styles from "./main.module.css";

export default function Main(props) {
  const { pokemonData } = props;
  const { searchInput } = props;
  const { indexOfFirstPokemon } = props;
  const { indexOfLastPokemon } = props;
  //   console.log(
  //     "-------------------------Main component-------------------------"
  //   );
  //   console.log("first pokemon index: ", indexOfFirstPokemon);
  //   console.log("Last pokemon index: ", indexOfLastPokemon);
  //   console.log(pokemonData);
  const filteredPokemonData = pokemonData
    .slice(indexOfFirstPokemon, indexOfLastPokemon)
    .filter((pokemon) => {
      return pokemon.name.includes(searchInput);
    });
  return (
    <main className={styles.main_header}>
      <CardContainer pokemonData={filteredPokemonData} />
    </main>
  );
}
