import React from "react";
import { matchIngredientsWithMeasurements } from "../pages/api/searchCocktail";
import styles from "./styles/RecipeDetails.module.css";

export default function RecipeDetails({ drink }) {
    let {
        strDrink: name,
        strDrinkThumb: image,
        strInstructions: recipe,
        ingredientsList,
    } = drink;

    // Added this so that we can get ingredients and measurements to display for random cocktails.
    if (!drink.ingredientsList) {
        ingredientsList = matchIngredientsWithMeasurements(drink);
    }

    return (
        <>
            <div id={styles.body}>
                <img className={styles.img} src={image}></img>
                <div id={styles.description}>
                    <h1 id={styles.drinkTitle}>{name}</h1>
                    <h3 id={styles.ingredientsTitle}>Ingredients</h3>
                    <ul>
                        <div>
                            {ingredientsList && ingredientsList.map((ingredient) => (
                                <li id={styles.ingredient}>
                                    {ingredient.name} - {ingredient.measurement}
                                </li>
                            ))}
                        </div>
                    </ul>
                    <h3 id={styles.directionsTitle}>Directions</h3>
                    <p id={styles.drinkDescription}>{recipe}</p>
                </div>
            </div>
        </>
    );
}
