// // Sample array of recipes with diet information
// const recipes = [
//     { title: 'Veggie Pasta', diet: 'vegetarian' },
//     { title: 'Vegan Curry', diet: 'vegan' },
//     { title: 'Gluten-Free Pancakes', diet: 'gluten-free' },
//     // Additional recipe objects...
//   ];
  
//   // Function to display recipes based on the provided list
//   function displayRecipes(recipeList) {
//     const recipeContainer = document.getElementById('recipe-list');
//     recipeContainer.innerHTML = '';
  
//     for (let i = 0; i < recipeList.length; i++) {
//       const recipe = recipeList[i];
//       const recipeCard = document.createElement('div');
//       recipeCard.textContent = recipe.title;
//       recipeContainer.appendChild(recipeCard);
//     }
//   }
  
//   // Function to filter recipes by diet
//   function filterRecipesByDiet(diet) {
//     const filteredRecipes = [];
//     for (let i = 0; i < recipes.length; i++) {
//       const recipe = recipes[i];
//       if (diet === 'all' || recipe.diet === diet) {
//         filteredRecipes.push(recipe);
//       }
//     }
//     displayRecipes(filteredRecipes);
//   }
  
//   // Event listeners for filter buttons
//   document.getElementById('filter-all').onclick = function() {
//     filterRecipesByDiet('all');
//   };
  
//   document.getElementById('filter-vegetarian').onclick = function() {
//     filterRecipesByDiet('vegetarian');
//   };
  
//   document.getElementById('filter-vegan').onclick = function() {
//     filterRecipesByDiet('vegan');
//   };
  
//   document.getElementById('filter-gluten-free').onclick = function() {
//     filterRecipesByDiet('gluten-free');
//   };
  
//   // Initially display all recipes
//   displayRecipes(recipes);
  

{/* <button id="filter-all">All Recipes</button>
<button id="filter-vegetarian">Vegetarian</button>
<button id="filter-vegan">Vegan</button>
<button id="filter-gluten-free">Gluten-Free</button>

<!-- Display the list of recipes -->
<div id="recipe-list">
  <!-- Recipe cards go here -->
</div> */}

const recipes = [
    {
      title: "Veggie Pasta Bake",
      diet: "Vegetarian",
      mealType: "Lunch",
      rating: 4.8,
      imageSrc: "Vegetable-Pasta-Bake-Square-FS-19.jpg",
    },
    {
      title: "Spicy Chickpea Curry",
      diet: "Vegan",
      mealType: "Dinner",
      rating: 4.5,
      imageSrc: "chickpea-curry-recipe-10.jpg",
    },
    {
      title: "Grilled Lemon Herb Salmon",
      diet: "Gluten-Free",
      mealType: "Dinner",
      rating: 4.9,
      imageSrc: "Lemon-Herb-Salmon-7.jpg",
    },
    {
      title: "Quinoa Salad with Roasted Artichoke",
      diet: "Vegetarian",
      mealType: "Lunch",
      rating: 4.2,
      imageSrc: "SQ-mediterranean-quinoa-salad-5.jpg",
    },
    {
      title: "Cauliflower Crust Margherita Pizza",
      diet: "Keto",
      mealType: "Dinner",
      rating: 4.3,
      imageSrc: "cauli-pizza-square.jpg",
    },
    {
      title: "Zucchini Noodles with Pesto Sauce",
      diet: "Vegan",
      mealType: "Lunch",
      rating: 4.4,
      imageSrc: "Pesto-Zuchini-Pasta-Feat-Image-Square.jpg",
    },
    {
      title: "Bacon-Wrapped Barbecue Chicken Breast",
      diet: "Keto",
      mealType: "Dinner",
      rating: 5.0,
      imageSrc: "wholesomeyum-Bacon-Wrapped-Chicken-Breast-8.jpg",
    },
    {
      title: "Greek Feta-Infused Olive Salad",
      diet: "Gluten-Free",
      mealType: "Lunch",
      rating: 4.0,
      imageSrc: "Greek-Salad-Recipe-recipe-card.jpg",
    },
];
  
  
function showFilterDropdown() {
    const filterDropdown = document.getElementById("filterDropdown");
    filterDropdown.style.display = "block";
  }
  
  function hideFilterDropdown() {
    const filterDropdown = document.getElementById("filterDropdown");
    filterDropdown.style.display = "none";
  }
  
  function displayRecipes(recipeList) {
    const recipeContainer = document.getElementsByClassName('recipe-list')[0]; 
    if (!recipeContainer) return; 
  
    recipeContainer.innerHTML = '';
  
    for (let i = 0; i < recipeList.length; i++) {
      const recipe = recipeList[i];
      const recipeCard = document.createElement('div');
      recipeCard.className = "recipe-card";
  
      const recipeImage = document.createElement('img');
      recipeImage.src = recipe.imageSrc;
      recipeImage.alt = recipe.title;
      recipeCard.appendChild(recipeImage);
  
      const recipeInfo = document.createElement('div');
      recipeInfo.className = "recipe-info";
  
      const recipeTitle = document.createElement('h2');
      recipeTitle.textContent = recipe.title;
      recipeInfo.appendChild(recipeTitle);
  
      const recipeRating = document.createElement('p');
      recipeRating.innerHTML = `<i class="fas fa-star" style="color: gold;"></i> ${recipe.rating}/5`;
      recipeInfo.appendChild(recipeRating);
  
      const recipeDiet = document.createElement('p');
      recipeDiet.innerHTML = `<i class="fas fa-utensils"></i> ${recipe.diet}`;
      recipeInfo.appendChild(recipeDiet);
  
      const recipeMealType = document.createElement('p');
      recipeMealType.innerHTML = `<i class="fas fa-utensil-spoon"></i> ${recipe.mealType}`;
      recipeInfo.appendChild(recipeMealType);
  
      recipeCard.appendChild(recipeInfo);
      recipeContainer.appendChild(recipeCard);
    }
  }
  

  function filterByDiet(diet) {
    const filteredRecipes = recipes.filter(function(recipe) {
      return diet === 'all' || recipe.diet === diet;
    });
    displayRecipes(filteredRecipes);
  }
  
  
function filterByMealType(mealType) {
    const filteredRecipes = recipes.filter(function(recipe) {
      return mealType === 'all' || recipe.mealType === mealType;
    });
    displayRecipes(filteredRecipes);
  }
  
  function filterByRating(minRating) {
    const filteredRecipes = recipes.filter(function(recipe) {
      return recipe.rating >= minRating;
    });
    displayRecipes(filteredRecipes);
  }
  
  function resetFilters() {
    displayRecipes(recipes);
  }

  displayRecipes(recipes);