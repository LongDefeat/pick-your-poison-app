import axios from "axios";

async function searchCocktail(data) {
  axios({
    method: "get",
    url: `http://localhost:3001/cocktaildb/search/?recipe=${data}`,
  }).then(function (response) {
    console.log(response.data);
  });
}

export default searchCocktail;
