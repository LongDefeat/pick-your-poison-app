import { useState, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";
import randomCocktail from "./api/randomCocktail";
import CurrentUser from "../components/auth/CurrentUser";
import Navigation from "../components/routes-nav/Navigation";
import HomepageIntro from "../components/HomepageIntro";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const currentUser = useContext(CurrentUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prevents users from searching if the search field is empty
    if (searchTerm.trim() === "") {
      return;
    }
    const data = await searchCocktail(searchTerm);
    setSearchTerm("");
    if (data == undefined) {
      setAlert(true);
    }
    else {
      // Pushing variables through to page and setting the route
      router.push({
        pathname: `/drinks/${searchTerm}`,
        query: { 
          drinks: JSON.stringify(data)
        }
      })
    }
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
        {alert === true && <Alert />}
      </main>{" "}
    </div>
  );
}

