import React from "react";
import styles from "./styles/RecipeDetails.module.css";

export default function RecipeDetails(props) {
  return (
    <>
      <div id={styles.body}>
        <img className={styles.img} src={props.image}></img>
        <div id={styles.description}>
            <h1 id={styles.drinkTitle}>{props.name}</h1>
            <h3>Ingredients</h3>
            <ul>
              <div>
                {props.ingredients.map((ingredient) => (
                  <div>
                    {ingredient}
                  </div>
                ))}
            </div>
          </ul>
          <h3>Directions</h3>
          <p id={styles.drinkDescription}>{props.recipe}</p>
        </div>
      </div>
    </>
  );
}
