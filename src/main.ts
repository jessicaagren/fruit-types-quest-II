import { fruits } from "./fruits/fruits";
import { getCategories, getColors, getFruit, getFruitsByCategory, getFruitsByColor, getIconsByCategory, getIconsByColor, numberOfCategoryFruits, numberOfColoredFruits } from "./fruits/utils";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils
console.log(`All fruits in the category "berry" are ${getFruitsByCategory("berry", fruits).join(", ")}.`);
console.log(`All fruits with the color "yellow" are ${getFruitsByColor("yellow", fruits).join(", ")}.`);
console.log(`The number of blue fruits are: ${numberOfColoredFruits("blue", fruits)}.`);
console.log(`The number of black fruits are: ${numberOfColoredFruits("black", fruits)}.`);
console.log(`The number of pome fruits are: ${numberOfCategoryFruits("pome", fruits)}.`);
console.log(`The number of nuts fruits are: ${numberOfCategoryFruits("nuts", fruits)}.`);
console.log(`The categories of the fruits are: ${getCategories(fruits).join(", ")}.`);
console.log(`The colors of the fruits are: ${getColors(fruits).join(", ")}.`);
console.log(`All berries' icons are: ${getIconsByCategory("berry", fruits).join(", ")}`);
console.log(`All pepo's icons are: ${getIconsByCategory("pepo", fruits).join(", ")}`);
console.log(`All yellow icons are: ${getIconsByColor("yellow", fruits).join(", ")}`);
console.log(`All red icons are: ${getIconsByColor("red", fruits).join(", ")}`);