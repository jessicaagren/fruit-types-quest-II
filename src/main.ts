import { fruits } from "./fruits/fruits";
import { getCategories, getColors } from "./fruits/utils";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(`The categories of the fruits are: ${getCategories(fruits).join(", ")}.`);
console.log(`The colors of the fruits are: ${getColors(fruits).join(", ")}.`);