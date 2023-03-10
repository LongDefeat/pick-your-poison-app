import axios from "axios";

async function randomCocktail(data) {
  try {
    const response = axios({
      method: "get",
      url: `http://localhost:3001/cocktaildb/random_recipe/?recipe=${data}`,
    });
    return (await response).data;
  } catch (error) {
    console.error(error);
  }
}

export default randomCocktail;
