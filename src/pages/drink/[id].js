import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import searchCocktail from "../api/searchCocktail";
import randomCocktail from "../api/randomCocktail";
import { matchIngredientsWithMeasurements } from "../api/searchCocktail";
import HomepageIntro from "../../components/HomepageIntro";
import SearchForm from "../../components/SearchForm";
import Navigation from "../../components/routes-nav/Navigation";
import RecipeDetails from "../../components/RecipeDetails";
import DrinksList from "../../components/DrinksList";
import Alert from "../../components/Alert";

export default function DrinkPage() {
  const [isRandom, setIsRandom] = useState(true);
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const {
    query: {drink}
  } = router;

  useEffect(() => {
    if (isRandom) {
      handleShowRandomCocktailRecipe();
    }
  }, [isRandom]);

  const parsedCocktail = JSON.parse(drink);

  const name = parsedCocktail.strDrink;
  const image = parsedCocktail.strDrinkThumb;
  const instructions = parsedCocktail.strInstructions;
  const ingredientsList = matchIngredientsWithMeasurements(parsedCocktail);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prevents users from searching if the search field is empty
    if (searchTerm.trim() === "") {
        return;
    }
    setShowDrinkRecipe(false);
    const data = await searchCocktail(searchTerm);
    setResults(data);
    setSearchTerm("");
  };

  const handleShowDrinkRecipe = (result) => {
    setShowDrinkRecipe(true);
    console.log(result);
    // Pushing variables through to page and setting the route
    router.push({
        pathname: `/drink/${result.idDrink}`,
        query: { 
            drink: JSON.stringify(result)
        }
     })
  };

  const handleShowRandomCocktailRecipe = async () => {
    setIsRandom(true);
    const data = await randomCocktail();
    handleShowDrinkRecipe(data.recipe);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title> Nightcapp Cocktail Details </title>
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
      <main>
        <Navigation />
        <HomepageIntro />
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleShowRandomCocktailRecipe={handleShowRandomCocktailRecipe}
          searchTerm={searchTerm}
        />{" "}
         {!showDrinkRecipe && results && (
          <DrinksList
            results={results}
            handleShowDrinkRecipe={handleShowDrinkRecipe}
          />
        )}
        {!showDrinkRecipe && !results && showCocktails === true && <Alert />}
        {showDrinkRecipe &&
          <RecipeDetails 
            name={name}
            image={image}
            instructions={instructions}
            ingredientsList={ingredientsList}
          />
        }{" "}
      </main>
    </div>
  )
}
