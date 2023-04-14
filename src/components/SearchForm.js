import React from "react";
import styles from "./styles/SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm(props) {
  return (
    <div id={styles.form}>
        <form onSubmit={props.handleSubmit}>
            <input
            id={styles.input}
            type="text"
            value={props.searchTerm}
            onChange={props.handleChange}
            />
            <button 
            className={styles.btn} 
            type="submit">
                Search
            </button>
            <button
            className={styles.btn}
            onClick={
                props.handleShowRandomCocktailRecipe
            }
            >
                <FontAwesomeIcon id={styles.dice} icon={faDice} />
                Random
            </button>
        </form>
    </div>
  );
}
