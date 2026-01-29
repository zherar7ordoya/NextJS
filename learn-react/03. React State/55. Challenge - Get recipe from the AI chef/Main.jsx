// File: Main.jsx

import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "chicken",
        "all the main spices",
        "corn",
        "heavy cream",
        "pasta",
    ]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const res = await fetch("http://localhost:3001/api/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients }),
        });

        const data = await res.json();
        setRecipe(data.recipe);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngredient,
        ]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
