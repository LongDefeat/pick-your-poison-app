import React from "react";
import styles from "./styles/RecipeDetails.module.css";

export default function RecipeDetails({ name, image, recipe, ingredients }) {
  return (
    <>
      <div id={styles.body}>
        <img className={styles.img} src={image}></img>
        <div id={styles.description}>
            <h1 id={styles.drinkTitle}>{name}</h1>
            <h3 id={styles.ingredientsTitle}>Ingredients</h3>
            <ul>
              <div>
                {ingredients.map((ingredient) => (
                  <li id={styles.ingredient}>
                    {ingredient}
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
