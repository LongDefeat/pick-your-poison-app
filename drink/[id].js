import { useRouter } from 'next/router';
import Head from "next/head";
import { matchIngredientsWithMeasurements } from "../api/searchCocktail";
import Navigation from "../../components/routes-nav/Navigation";
import RecipeDetails from "../../components/RecipeDetails";

export default function DrinkPage() {
  const router = useRouter();

  const {
    query: {drink}
  } = router;

  const parsedCocktail = JSON.parse(drink);

  const name = parsedCocktail.strDrink;
  const image = parsedCocktail.strDrinkThumb;
  const instructions = parsedCocktail.strInstructions;
  const ingredientsList = matchIngredientsWithMeasurements(parsedCocktail);

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
        <RecipeDetails 
          name={name}
          image={image}
          instructions={instructions}
          ingredientsList={ingredientsList}
        />
      </main>
    </div>
  )
}