import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "chicken",
        "all the main spices",
        "corn",
        "heavy cream",
        "pasta",
    ]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);
    /**
     * Problem:
     * We want to scroll the "Ready for a recipe?" div into view
     * ONLY AFTER the ClaudeRecipe section is rendered to the page
     * (i.e. when `recipe` is not an empty string). How can we do that?
     * Solution:
     * We can use the useEffect hook to watch for changes to the `recipe` state.
     * Why useEffect?
     * Because useEffect runs after the component has rendered, so we can be sure
     * that the ClaudeRecipe section is in the DOM when we try to scroll to it.
     * When `recipe` changes and is not an empty string, we can scroll the
     * recipeSection into view.
     */
    React.useEffect(() => {
        // Check if recipe is not empty and the ref is set (not null) before scrolling.
        // What if recipe is empty? Is is evaluated as false? Yes.
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
        setRecipe(recipeMarkdown);
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
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
