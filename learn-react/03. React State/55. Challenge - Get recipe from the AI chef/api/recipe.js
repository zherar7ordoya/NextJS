// /api/recipe (pseudo)
import { getRecipeFromMistral } from './ai'

export async function POST(req) {
    const { ingredients } = await req.json()
    const recipe = await getRecipeFromMistral(ingredients)
    return Response.json({ recipe })
}
