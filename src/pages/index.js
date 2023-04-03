import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import randomCocktail from "./api/randomCocktail";
import CurrentUser from "../components/auth/CurrentUser";
import RecipeDetails from "../components/RecipeDetails";
import Navigation from "../components/routes-nav/Navigation";
import HomepageIntro from "../components/HomepageIntro";
import SearchForm from "../components/SearchForm";
import DrinksList from "../components/DrinksList";
import Alert from "../components/Alert";

export default function Home() {
<<<<<<< HEAD
  const [drinkInfo, setDrinkInfo] = useState();
  const [showDrinkRecipe, setShowDrinkRecipe] = useState(false);
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const currentUser = useContext(CurrentUser);
=======
    // Added this first useState() hook in order to fix the bug where when users click the
    // "random" button the DrinksList briefly flashes.
    const [isRandom, setIsRandom] = useState(false);
    const [drinkInfo, setDrinkInfo] = useState();
    const [hideDrinksList, setHideDrinksList] = useState(false);
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
        setHideDrinksList(false);
        setShowCocktails(true);
    };
>>>>>>> 4aa354831fa566ccf23018ac8593ad3bcc2f4728

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowDrinkRecipe(false);
    const data = await searchCocktail(searchTerm);
    setResults(data);
    setSearchTerm("");
    setShowCocktails(true);
  };

<<<<<<< HEAD
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
        <Navigation currentUser={currentUser} />
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
        {showDrinkRecipe && <RecipeDetails drink={drinkInfo} />}{" "}
      </main>{" "}
    </div>
  );
=======
    // Makes it so when a user clicks "Home" in the navbar after searching it hides
    // the drinks list
    const handleHideDrinksList = () => {
        setHideDrinksList(true);
    }

    const handleShowRandomCocktailRecipe = async () => {
        // The two lines of code below this fix a bug where the DrinksList would flash
        // in between searches.
        setShowCocktails(false);
        setResults([]);
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
                <Navigation 
                    handleHideDrinksList={handleHideDrinksList}
                />
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
                {!hideDrinksList && !showDrinkRecipe && results && !isRandom && (
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
>>>>>>> 4aa354831fa566ccf23018ac8593ad3bcc2f4728
}
