import axios from "axios";

// Modified the searchCocktail component to return the response
// so that it can be used in index.js

async function searchCocktail(data) {
  try {
    const response = axios({
      method: "get",
      url: `http://localhost:3001/cocktaildb/search/?recipe=${data}`,
    });
    return (await response).data;
  } catch (error) {
    console.error(error);
  }
}

export default searchCocktail;
