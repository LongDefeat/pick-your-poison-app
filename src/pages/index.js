import { useState } from "react";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Added new usestate() to toggle drink list visibility
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCocktail(searchTerm);
    setResults(data);
    setSearchTerm("");
    setShowCocktails(true);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>My Cocktail App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="Home.module.css" rel="stylesheet" />
      </Head>

      <main className={styles.container}>
        <h1 id={styles.h1}>Welcome to Our Cocktail App!</h1>
        <p id={styles.p}>
          Get started by searching for your favorite cocktail or browsing our
          collection.
        </p>
        <div id={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              id={styles.input}
              type="text"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className={styles.btn} type="submit">
              Search
            </button>
          </form>
          {results.drinks && (
            <ul id={styles.ul}>
              {results.drinks.map((result) => (
                <li key={result.idDrink} id={styles.li}>
                  <h3 id={styles.h3}>
                    {result.strDrink}
                    <h4 id={styles.h4}>{result.strAlcoholic}</h4>
                  </h3>
                  <img id={styles.img} src={result.strDrinkThumb} />
                </li>
              ))}
            </ul>
          )}
          {!results.drinks && showCocktails === true && (
            <div>Sorry! No cocktails found. Try another search!</div>
          )}
        </div>
      </main>
    </div>
  );
}
