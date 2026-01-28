
import { HfInference } from '@huggingface/inference'


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        // Dentro de tu fetch en ai.js
        const response = await fetch("/api/hf/v1/chat/completions", { // Añadimos /hf/v1
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
                ],
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (err) {
        console.error("Error final:", err.message);
        return "No se pudo conectar.";
    }
}