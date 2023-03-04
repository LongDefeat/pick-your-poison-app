import { useState } from "react";
import Head from "next/head";
import Card from "../components/UI/Card";
import searchCocktail from "./api/searchCocktail";
import styles from "../styles/Home.module.css";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCocktail(searchTerm);
    console.log(data);
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
        <link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'></link>
      </Head>
      <main className={styles.container}>
        <h1 id={styles.h1}>
          Nightcapp
        </h1>
        <p id={styles.p}>
          Welcome to Nightcapp. Get started by searching for your favorite cocktail or browsing our
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
        </div>
        {results.drinks && (
          <ul id={styles.ul}>
            <div id={styles.row}>
              {results.drinks.map((result) => (
                <RecipeCard
                  key={result.idDrink}
                  name={result.strDrink}
                  image={result.strDrinkThumb}
                  recipe={result.strInstructions}
                />
              ))}
            </div>
          </ul>
        )}
        {!results.drinks && showCocktails === true && (
          <div>Sorry! No cocktails found. Try another search!</div>
        )}
      </main>
    </div>
  );
};
