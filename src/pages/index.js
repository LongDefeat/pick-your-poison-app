import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import randomCocktail from "./api/randomCocktail";
import RecipeDetails from "../components/RecipeDetails";
import Navigation from "../components/routes-nav/Navigation";
import HomepageIntro from "../components/HomepageIntro";
import SearchForm from "../components/SearchForm";
import DrinksList from "../components/DrinksList";

export default function Home() {
  const [drinkName, setDrinkName] = useState("");
  const [drinkImg, setDrinkImg] = useState("");
  const [drinkRecipe, setDrinkRecipe] = useState("");
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const setDrinkInfo = (name, img, recipe, ingredients) => {
    setDrinkName(name);
    setDrinkImg(img);
    setDrinkRecipe(recipe);
    setDrinkIngredients(ingredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCocktail(searchTerm);
    console.log(data);
    setResults(data);
    setSearchTerm("");
    setShowCocktails(true);
  };

  const handleShowDrinkRecipe = (result) => {
    setDrinkInfo(
      result.strDrink,
      result.strDrinkThumb,
      result.strInstructions,
      handleParseDrinkIngredients(result)
    );
    setShowDrinkRecipe(true);
  };

  // Added this so that the ingredients show on random cocktails
  const handleShowRandomCocktailRecipe = async () => {
    const data = await randomCocktail();
    handleShowDrinkRecipe(data.recipe);
  };

  // This function parses the drink ingredients and returns them in an array.
  const handleParseDrinkIngredients = (result) => {
    const ingredientKeys = Object.keys(result).filter((key) =>
      key.includes("Ingredient")
    );
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
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <main className={styles.container}>
        <Navigation />
        <HomepageIntro />
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleShowRandomCocktailRecipe={handleShowRandomCocktailRecipe}
          searchTerm={searchTerm}
        />
        {!showDrinkRecipe && results.drinks && (
          <DrinksList
            results={results}
            handleShowDrinkRecipe={handleShowDrinkRecipe}
          />
        )}

        {!showDrinkRecipe && !results.drinks && showCocktails === true && (
          <div id={styles.sorry}>
            Sorry! No cocktails found. Try another search!
          </div>
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
