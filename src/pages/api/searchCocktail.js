import axios from "axios";

function matchIngredientsWithMeasurements(cocktailData) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = {};
    if (cocktailData[`strMeasure${i}`]) {
      ingredient.measurement = cocktailData[`strMeasure${i}`];
    }
    if (cocktailData[`strIngredient${i}`]) {
      ingredient.name = cocktailData[`strIngredient${i}`];
    }
    ingredients.push(ingredient);
  }
  return ingredients;
}

async function searchCocktail(data) {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3001/cocktaildb/search/?recipe=${data}`,
    });
    debugger;
    const cocktailData = response.data;
    const cocktails = [];
    for (const cocktail of cocktailData) {
      const ingredientsList = matchIngredientsWithMeasurements(cocktail);
      cocktails.push({ ...cocktail, ingredientsList });
    }

    return cocktails;
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
