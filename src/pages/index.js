import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import searchCocktail from "./api/searchCocktail";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await searchCocktail(searchTerm);
    setSearchResult(result);
    setSearchTerm("");
  };

  const printResults = () => {
    let str = "";
    return "searchResult";
    // searchResult.map((cocktail) => (
    //   <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
    // ));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>My Cocktail App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Our Cocktail App!</h1>
        <p>
          Get started by searching for your favorite cocktail or browsing our
          collection.
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} />
            <button type="submit">Search</button>
          </form>
          <ul>
            <li>{printResults}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
