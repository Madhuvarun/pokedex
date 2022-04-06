import React from "react";
import { Input } from "../UI/Input";
import styles from "./Header.module.css";

export default function Header(props) {
  const { searchInput } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.app_header}>Pokedex</h1>
      <Input
        value={props.searchInput}
        onChange={(event) => props.searchOnChange(event)}
        placeholder="search pokemon"
        padding="0.75rem"
        type="search"
        margin="0px 0px 25px 0px"
        // text_align="center"
        border="none"
        border_radius="2px"
        size="15"
        font_size="16px"
      />
    </header>
  );
}
