// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const receiptsList = document.getElementById("recipesList");

fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(({recipes}) => showRecipes(recipes));

function showRecipes(data){
    for (const item of data) {
        const recipeItem = document.createElement("a");
        recipeItem.classList.add("recipe-item");
        recipeItem.href = "#";

        const recipeImageBox = document.createElement("div");
        recipeImageBox.classList.add("recipe-image");
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        const recipeMealData = document.createElement("div");
        recipeMealData.classList.add("meal-data");
        const cuisine = document.createElement("p");
        cuisine.textContent = item.cuisine;
        const mealType = document.createElement("p");
        mealType.textContent = item.mealType[0];
        recipeMealData.append(cuisine, mealType);
        const recipeRatingData = document.createElement("div");
        recipeRatingData.classList.add("rating-data");
        const rating = document.createElement("p");
        rating.textContent = item.rating;
        const reviews = document.createElement("p");
        reviews.textContent = item.reviewCount;
        recipeRatingData.append(rating, reviews);
        const recipeServingData = document.createElement("div");
        recipeServingData.classList.add("serving-data");
        const servings = document.createElement("p");
        servings.textContent = item.servings;
        const calories = document.createElement("p");
        calories.textContent = item.caloriesPerServing;
        recipeServingData.append(servings, calories);
        const recipeTimeData = document.createElement("div");
        recipeTimeData.classList.add("time-data");
        const prepTime = document.createElement("p");
        prepTime.textContent = item.prepTimeMinutes;
        const cookTime = document.createElement("p");
        cookTime.textContent = item.cookTimeMinutes;
        recipeTimeData.append(prepTime, cookTime);
        recipeImageBox.append(image, recipeMealData, recipeRatingData, recipeServingData, recipeTimeData);

        const recipeInfoBox = document.createElement("div");
        recipeInfoBox.classList.add("recipe-info");
        const recipeId = document.createElement("p");
        recipeId.textContent = item.id;
        const recipeName = document.createElement("h2");
        recipeName.textContent = item.name;
        const recipeIngredients = document.createElement("ul");
        recipeIngredients.classList.add("recipe-ingredients");

        for (const ingredient of item.ingredients) {
            const ingredientName = document.createElement("li");
            ingredientName.textContent = ingredient;
            recipeIngredients.append(ingredientName);
        }

        const recipeInstructions = document.createElement("div");
        recipeInstructions.classList.add("recipe-instructions");

        for (const instruction of item.instructions) {
            const instructionItem = document.createElement("p");
            instructionItem.textContent = instruction;
            recipeInstructions.append(instructionItem);
        }

        const recipeUserId = document.createElement("p");
        recipeUserId.textContent = item.userId;
        const recipeTags = document.createElement("div");
        recipeTags.classList.add("recipe-tags");

        for (const tag of item.tags) {
            const tagName = document.createElement("p");
            tagName.textContent = tag;
            recipeTags.append(tagName);
        }

        recipeInfoBox.append(recipeId, recipeName, recipeIngredients, recipeInstructions, recipeUserId, recipeTags);

        recipeItem.append(recipeImageBox, recipeInfoBox);

        receiptsList.append(recipeItem);
    }
}

