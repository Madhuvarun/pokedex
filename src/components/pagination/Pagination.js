import React from "react";
import styles from "./pagination.module.css";

function Pagination(props) {
  const { noOfPokemons, pokemonsPerPage, currentPage } = props;
  const totalPages = Math.ceil(noOfPokemons / pokemonsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <div className={styles.pagination_container}>
      <ul className={styles.pagination_list}>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => props.changeCurrentPage(pageNumber)}
              className={currentPage === pageNumber ? `${styles.active}` : ""}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
