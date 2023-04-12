import styles from "./styles/RecipeDetails.module.css";
import { BiDrink } from "react-icons/bi";

export default function RecipeDetails(props) {
  return (
    <>
      <div id={styles.body}>
        <img className={styles.img} src={props.image}></img>
        <div id={styles.description}>
          <h1 id={styles.drinkTitle}>{props.name}</h1>
          <h3 id={styles.ingredientsTitle}>Ingredients</h3>
          <ul>
            <div>
              {props.ingredientsList &&
                props.ingredientsList.map((ingredient) => (
                  <li id={styles.ingredient}>
                    {ingredient.name} -{" "}
                    <span id={styles.measurements}>
                      {ingredient.measurement}
                    </span>
                  </li>
                ))}
            </div>
          </ul>
          <h3 id={styles.directionsTitle}>Directions</h3>
          <p id={styles.drinkDescription}>{props.instructions}</p>
          <div className={styles.iconContainer}>
            <BiDrink className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
}
