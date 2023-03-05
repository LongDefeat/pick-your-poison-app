import React from "react";
import styles from "./styles/RecipeCard.module.css";


function RecipeCard({name, image, recipe }) {
  return (
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h3 className={styles.cocktailName}>{name}</h3>
          <img src={image} className={styles.cardImage} />
          <div id={styles.instructionsBox}>
            <p className={styles.recipeInstructions}>{recipe}</p>
          </div>
        </div>
      </div>
  );
}

export default RecipeCard;
