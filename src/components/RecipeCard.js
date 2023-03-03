import React from "react";
import styles from "./styles/RecipeCard.module.css";

function RecipeCard({ key, name, image, recipe }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer} key={key}>
          <h3 className={styles.cocktailName}>{name}</h3>
          <img src={image} className={styles.cardImage} />
          <p className={styles.recipeInstructions}>{recipe}</p>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
