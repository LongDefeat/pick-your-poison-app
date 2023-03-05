import React from "react";
import Link from "next/link";
import styles from "./styles/RecipeCard.module.css";

function RecipeCard({ id, name, image, recipe }) {
  return (
    <Link href={`../pages/recipeDetails/${id}`}>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h3 className={styles.cocktailName}>{name}</h3>
          <img src={image} className={styles.cardImage} />
          <div id={styles.instructionsBox}>
            <p className={styles.recipeInstructions}>{recipe}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
