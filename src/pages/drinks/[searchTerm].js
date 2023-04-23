import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import searchCocktail from "../api/searchCocktail";
import randomCocktail from "../api/randomCocktail";
import HomepageIntro from "../../components/HomepageIntro";
import SearchForm from "../../components/SearchForm";
import Navigation from "../../components/routes-nav/Navigation";
import DrinksList from "../../components/DrinksList";
import Alert from "../../components/Alert";

export default function DrinksPage() {
    const [parsedCocktails, setParsedCocktails] = useState([]);
    const [alert, setAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const {
        query: {drinks}
      } = router;
    
      // Set the parsedCocktail state when the component mounts
    useEffect(() => {
        if (drinks) {
            const parsedDrinks = JSON.parse(drinks);
            setParsedCocktails(parsedDrinks);
        }
    }, [drinks]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prevents users from searching if the search field is empty
        if (searchTerm.trim() === "") {
            return;
        }
        setShowDrinkRecipe(false);
        const data = await searchCocktail(searchTerm);
        if (data == undefined) {
            setAlert(true);
        }
        setSearchTerm("");
   
        // Pushing variables through to page and setting the route
        router.push({
            pathname: `/drinks/${searchTerm}`,
            query: { 
                drinks: JSON.stringify(data)
            }
        })
    };

    const handleShowDrinkRecipe = (result) => {
        
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
        handleShowDrinkRecipe(data.recipe);
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
          <main>
            <Navigation />
            <HomepageIntro />
            <SearchForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleShowRandomCocktailRecipe={handleShowRandomCocktailRecipe}
                searchTerm={searchTerm}
            />{" "}
            <DrinksList
                results={parsedCocktails}
                handleShowDrinkRecipe={handleShowDrinkRecipe}
            />
            {alert === true && <Alert />}
          </main>{" "}
        </div>
    );
}
