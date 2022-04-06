import React from "react";
import styles from "./card.module.css";

function Card(props) {
  const { pokemonData } = props;
  const { name } = pokemonData;
  const id = parseInt(pokemonData.id);
  return (
    <a href={id}>
      <div className={styles.card} key={pokemonData.id}>
        <div className={styles.card_image}>
          <img
            alt={pokemonData.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </div>
        <div className={styles.card_text}>
          <p>{pokemonData.name}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
