import axios from "axios";

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
