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
import Alert from "../components/Alert";

export default function Home() {
    // Added this first useState() hook in order to fix the bug where when users click the
    // "random" button the drinkslist briefly flashes.
    const [isRandom, setIsRandom] = useState(false);
    const [drinkInfo, setDrinkInfo] = useState();
    const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
    const [showCocktails, setShowCocktails] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

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
        setShowCocktails(true);
    };

    const handleShowDrinkRecipe = (result) => {
        setDrinkInfo(result); 
        setShowDrinkRecipe(true);
    };

    const handleShowRandomCocktailRecipe = async () => {
        const data = await randomCocktail();
        setIsRandom(true);
        handleShowDrinkRecipe(data.recipe);
    };

    // Need to pass this to SearchForm in order to bring back search functionality
    // after setting isRandom to true;
    const handleSetIsRandomFalse = () => {
        setIsRandom(false);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <Head>
                <title> Nightcapp </title>{" "}
                <link href="Home.module.css" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Vibur:400"
                    rel="stylesheet"
                    type="text/css"
                ></link>{" "}
            </Head>{" "}
            <main className={styles.container}>
                <Navigation />
                <HomepageIntro />
                <SearchForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleSetIsRandomFalse={handleSetIsRandomFalse}
                    handleShowRandomCocktailRecipe={
                        handleShowRandomCocktailRecipe
                    }
                    searchTerm={searchTerm}
                />{" "}
                {!showDrinkRecipe && results && !isRandom && (
                    <DrinksList
                        results={results}
                        handleShowDrinkRecipe={handleShowDrinkRecipe}
                    />
                )}
                {!showDrinkRecipe &&
                    !results &&
                    showCocktails === true && (
                        <Alert />
                    )}
                {showDrinkRecipe && <RecipeDetails drink={drinkInfo} />}{" "}
            </main>{" "}
        </div>
    );
}
