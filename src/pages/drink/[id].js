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
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const {
    query: {drink}
  } = router;

  // Set the parsedCocktail state when the component mounts
  useEffect(() => {
    if (drink) {
      const parsedCocktail = JSON.parse(drink);
      const name = parsedCocktail.strDrink;
      const image = parsedCocktail.strDrinkThumb;
      const instructions = parsedCocktail.strInstructions;
      const ingredientsList = matchIngredientsWithMeasurements(parsedCocktail);

      // Set the state to show the RecipeDetails component
      setShowDrinkRecipe(true);
      setResults([]);
      setSearchTerm("");
      setParsedCocktail({ name, image, instructions, ingredientsList });
    }
  }, [drink]);

  const [parsedCocktail, setParsedCocktail] = useState(null);

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
    // console.log(result);
    // Pushing variables through to page and setting the route
    router.push({
        pathname: `/drink/${result.idDrink}`,
        query: { 
            drink: JSON.stringify(result)
        }
     })
  };

  const handleShowRandomCocktailRecipe = async () => {
    const data = await randomCocktail();
    const parsedCocktail = {
      name: data.recipe.strDrink,
      image: data.recipe.strDrinkThumb,
      instructions: data.recipe.strInstructions,
      ingredientsList: matchIngredientsWithMeasurements(data.recipe)
    };
    setParsedCocktail(parsedCocktail);
    setShowDrinkRecipe(true);
    setResults([]);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title> Nightcapp Cocktail Details </title>
        <link href="/Home.module.css" rel="stylesheet" />
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
        {!showDrinkRecipe && !results === true && <Alert />}
        {showDrinkRecipe &&
          <RecipeDetails 
            name={parsedCocktail.name}
            image={parsedCocktail.image}
            instructions={parsedCocktail.instructions}
            ingredientsList={parsedCocktail.ingredientsList}
          />
        }{" "}
      </main>
    </div>
  )
}
