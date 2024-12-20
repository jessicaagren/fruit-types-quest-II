import Fruit from "./fruit-types";

export const getFruit = (name) => {
	// använd fruits-arrayen och returnera det fruit-objekt som matchar name
	// finns det ingen sådan fruit så returnera undefined
};

export const getIcon = (name) => {
	// använd fruits-arrayen och returnera ikonen som matchar frukten name
	// finns det ingen sådan frukt så returnera undefined
};

export const getColor = (name) => {
	// använd fruits-arrayen och returnera färgen som matchar frukten name
	// finns det ingen sådan frukt så returnera undefined
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

export const numberOfColoredFruits = (color: string, fruits: Fruit[]): number => {
	let colorCounter = 0;

	fruits.forEach(fruit => {
		if (fruit.color === color) {
			colorCounter++;
		}
	});

	return colorCounter;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const numberOfCategoryFruits = (category: string, fruits: Fruit[]): number => {
	let colorCounter = 0;

	fruits.forEach(fruit => {
		if (fruit.category === category) {
			colorCounter++;
		}
	});

	return colorCounter;
};

export const getFruitsByCategory = (category: string, fruits: Fruit[]): string[] => {
	// använd fruits-arrayen
	// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
	const fruitArray: string[] = [];

	fruits.forEach(fruit => {
		if (fruit.category === category) {
			fruitArray.push(fruit.name);
		}
	});
	return fruitArray;
};

// gör en getFruitsByColor också

export const getFruitsByColor = (color: string, fruits: Fruit[]): string[] => {
	const fruitArray: string[] = [];

	fruits.forEach(fruit => {
		if (fruit.color === color) {
			fruitArray.push(fruit.name);
		}
	});
	return fruitArray;
};

// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
export const getIconsByCategory = (category: string, fruits: Fruit[]): string[] => {
	const icons: string[] = [];

	fruits.forEach(fruit => {
		if (fruit.category === category) {
			icons.push(fruit.icon);
		}
	});
	return icons;
};

// gör en getIconsByColor också

export const getIconsByColor = (color: string, fruits: Fruit[]): string[] => {
	const colors: string[] = [];

	fruits.forEach(fruit => {
		if (fruit.color === color) {
			colors.push(fruit.icon);
		}
	});
	return colors;
};

// gör en getCategories som returnerar en array av alla kategorier

export const getCategories = (array: Fruit[]): string[] => {
	const allFruits: string[] = [];
	
	array.forEach(fruit => {
		if (!allFruits.includes(fruit.category))
		allFruits.push(fruit.category);
	});
	return allFruits;
}

// gör en getColors som returnerar en array av alla färger

export const getColors = (array: Fruit[]): string[] => {
	const allFruits: string[] = [];

	array.forEach(fruit => {
		if (!allFruits.includes(fruit.color))
		allFruits.push(fruit.color);
	});
	return allFruits;
}