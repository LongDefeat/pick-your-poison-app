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
    const [drinkInfo, setDrinkInfo] = useState();
    const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
    const [showCocktails, setShowCocktails] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
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
        handleShowDrinkRecipe(data.recipe);
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
                    handleShowRandomCocktailRecipe={
                        handleShowRandomCocktailRecipe
                    }
                    searchTerm={searchTerm}
                />{" "}
                {!showDrinkRecipe && results && (
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
