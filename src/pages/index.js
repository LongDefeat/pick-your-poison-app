import { useState } from "react";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import styles from "../styles/Home.module.css";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";

export default function Home() {
  const [drinkName, setDrinkName] = useState("");
  const [drinkImg, setDrinkImg] = useState("");
  const [drinkRecipe, setDrinkRecipe] = useState("");
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const setDrinkInfo = (name, img, recipe) => {
    setDrinkName(name);
    setDrinkImg(img);
    setDrinkRecipe(recipe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCocktail(searchTerm);
    setResults(data);
    setSearchTerm("");
    setShowCocktails(true);
  };

  const handleShowDrinkRecipe = (result) => {
    setShowDrinkRecipe(true);
    setDrinkInfo(result.strDrink, result.strDrinkThumb, result.strInstructions);
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
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <main className={styles.container}>
        <h1 id={styles.h1}>Nightcapp</h1>
        <p id={styles.p}>
          Welcome to Nightcapp. Get started by searching for your favorite
          cocktail or browsing our collection.
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
        {!showDrinkRecipe && results.drinks && (
          <ul id={styles.ul}>
            <div id={styles.row}>
              {results.drinks.map((result) => (
                <div onClick={() => handleShowDrinkRecipe(result)}>
                  <RecipeCard
                    key={result.idDrink}
                    id={result.idDrink}
                    name={result.strDrink}
                    image={result.strDrinkThumb}
                    recipe={result.strInstructions}
                  />
                </div>
              ))}
            </div>
          </ul>
        )}
        {!showDrinkRecipe && !results.drinks && showCocktails === true && (
          <div>Sorry! No cocktails found. Try another search!</div>
        )}
        {showDrinkRecipe && (
          <RecipeDetails 
          name={drinkName}
          image={drinkImg}
          recipe={drinkRecipe}
          />
        )}
      </main>
    </div>
  );
}
