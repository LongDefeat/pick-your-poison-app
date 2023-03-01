import { useState } from "react";
import Head from "next/head";
import searchCocktail from "./api/searchCocktail";

export default function Home() {
  // Added new usestate() to toggle drink list visibility
  const [showCocktails, setShowCocktails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCocktail(searchTerm);
    setResults(data);
    setSearchTerm("");
    setShowCocktails(true);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Couldn't map over results because you can't map over objects, but
  // results.drinks is an array so we can map over that. The logic
  // below checks whether or not results.drinks is empty, and if not
  // it displays the list of drinks.
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
          {results.drinks && (
            <ul>
              {results.drinks.map((result) => (
                <li key={result.idDrink}>{result.strDrink}</li>
              ))}
            </ul>
          )}
          {((!results.drinks) && (showCocktails === true)) && (
            <div>Sorry! No cocktails found. Try another search!</div>
          )}
        </div>
      </main>
    </div>
  );
}
