import axios from "axios";

function getIngredients(cocktailData) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktailData[`strIngredient${i}`]) {
      ingredients.push(`
        <li>${cocktailData[`strIngredient${i}`]} - ${
        cocktailData[`strMeasure${i}`]
      }</li>
      `);
    }
  }
  console.log(ingredients.join(""));
  return ingredients.join("");
}

async function searchCocktail(data) {
  try {
    const response = axios({
      method: "get",
      url: `http://localhost:3001/cocktaildb/search/?recipe=${data}`,
    });
    const cocktailData = response.data;
    // const ingredientsList = getIngredients(cocktailData);
    return (await response).data;
  } catch (error) {
    console.error(error);
  }
}

export default searchCocktail;
// import axios from "axios";

// async function displayCocktailDetails(cocktailName) {
//   try {
//     const cocktailData = await searchCocktail(cocktailName);
//     const ingredientsList = getIngredients(cocktailData);
//     const cocktailDetails = `
//       <h2>${cocktailData.strDrink}</h2>
//       <img src="${cocktailData.strDrinkThumb}" alt="${cocktailData.strDrink}">
//       <h3>Ingredients:</h3>
//       <ul>${ingredientsList}</ul>
//       <p>${cocktailData.strInstructions}</p>
//     `;
//     const cocktailContainer = document.getElementById("cocktail-details");
//     cocktailContainer.innerHTML = cocktailDetails;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function searchCocktail(searchTerm) {
//   try {
//     const response = await axios.get(
//       `http://localhost:3001/cocktaildb/search/?recipe=${searchTerm}`
//     );
//     return response.data.drinks[0];
//   } catch (error) {
//     console.error(error);
//   }
// }

// export { displayCocktailDetails };
