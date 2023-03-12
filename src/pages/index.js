import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import randomCocktail from "./api/randomCocktail";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";
import Navigation from "../components/routes-nav/Navigation";
import HomepageIntro from "../components/HomepageIntro";


export default function Home() {
  const [drinkName, setDrinkName] = useState("");
  const [drinkImg, setDrinkImg] = useState("");
  const [drinkRecipe, setDrinkRecipe] = useState("");
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [randomDrink, setRandomDrink] = useState({});

  const setDrinkInfo = (name, img, recipe, ingredients) => {
    setDrinkName(name);
    setDrinkImg(img);
    setDrinkRecipe(recipe);
    setDrinkIngredients(ingredients);
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
    setDrinkInfo(
      result.strDrink, 
      result.strDrinkThumb, 
      result.strInstructions,
      handleParseDrinkIngredients(result)
      );
  };
  
  // Added this so that the ingredients show on random cocktails
  const handleShowRandomCocktailRecipe = async (event) => {
    event.preventDefault();
    const data = await randomCocktail();
    setRandomDrink(data.recipe);
    handleShowDrinkRecipe(randomDrink);
  }

  // This function parses the drink ingredients and returns them in an array.
  const handleParseDrinkIngredients = (result) => {
      const ingredientKeys = Object.keys(result).filter((key) => key.includes("Ingredient"));
      const ingredientsList = ingredientKeys.map((key) => result[key]);
      const nonNullValues = ingredientsList.filter((value) => value !== null);
      return nonNullValues;
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Nightcapp</title>
        <link href="Home.module.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <main className={styles.container}>
        <Navigation />
        <HomepageIntro />
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
            <button
              className={styles.btn}
              onClick={
                handleShowRandomCocktailRecipe
              }
            >
            <FontAwesomeIcon id={styles.dice} icon={faDice} />
            Random
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
          <div id={styles.sorry}>Sorry! No cocktails found. Try another search!</div>
        )}

        {showDrinkRecipe && (
          <RecipeDetails
            name={drinkName}
            image={drinkImg}
            recipe={drinkRecipe}
            ingredients={drinkIngredients}
          />
        )}
      </main>
    </div>
  );
}
