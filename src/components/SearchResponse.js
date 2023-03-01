function SearchResponse(props) {
  if (props.drinks) {
    const cocktails = props.drinks;
    const listCocktails = cocktails.map((drink) => {
      <li key={drink.idDrink}>{drink.strDrink}</li>;
    });
    return (
      <div>
        <ul>{listCocktails}</ul>
      </div>
    );
  }
}

export default SearchResponse;
