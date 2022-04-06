import React from "react";
import styles from "./card-container.module.css";
import Card from "../card-section/Card";

function CardContainer(props) {
  const { pokemonData } = props;
  //   console.log("card container: ", pokemonData);
  return (
    <div className={styles.card_container}>
      {pokemonData.map((pokemon) => {
        return <Card key={pokemon.name} pokemonData={pokemon} />;
      })}
    </div>
  );
}

export default CardContainer;
