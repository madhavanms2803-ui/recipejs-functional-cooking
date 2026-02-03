const recipes = [
    { id: 1, title: "Classic Spaghetti Carbonara", time: 25, difficulty: "easy", description: "A creamy Italian pasta dish.", category: "pasta" },
    { id: 2, title: "Chicken Tikka Masala", time: 45, difficulty: "medium", description: "Spiced tomato chicken curry.", category: "curry" },
    { id: 3, title: "Homemade Croissants", time: 180, difficulty: "hard", description: "Buttery flaky pastries.", category: "baking" },
    { id: 4, title: "Greek Salad", time: 15, difficulty: "easy", description: "Fresh salad with feta.", category: "salad" },
    { id: 5, title: "Beef Wellington", time: 120, difficulty: "hard", description: "Beef wrapped in pastry.", category: "meat" },
    { id: 6, title: "Vegetable Stir Fry", time: 20, difficulty: "easy", description: "Quick mixed veggies.", category: "vegetarian" },
    { id: 7, title: "Pad Thai", time: 30, difficulty: "medium", description: "Thai noodles.", category: "noodles" },
    { id: 8, title: "Margherita Pizza", time: 60, difficulty: "medium", description: "Classic Italian pizza.", category: "pizza" }
];

const recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => `
<div class="recipe-card">
    <h3>${recipe.title}</h3>
    <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
    </div>
    <p>${recipe.description}</p>
</div>`;

const renderRecipes = (list) => {
    recipeContainer.innerHTML = list.map(createRecipeCard).join("");
};

renderRecipes(recipes);
