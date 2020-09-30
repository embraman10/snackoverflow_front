export const loadingRecipes = () => {
    return {
        type: 'LOADING_RECIPES'
    }
}

export const resetRecipes = () => {
    return {
        type: 'RESET_RECIPES'
    }
}

export const sendingRecipes = recipes => {
    let recipeData;

    if (recipes.length === 0) {
        recipeData = null
    } else {
        recipeData = recipes.map(recipe => {
            return {
                title: recipe.title, 
                recipeId: recipe.id,
                image: recipe.image.includes("http") ? recipe.image : `https://spoonacular.com/recipeImages/${recipe.image}`,
                instructions: recipe.instructions,
                ingredients: recipe.extendedIngredients
            }
        })
    }
    return {
        type: 'FETCH_RECIPES',
        payload: recipeData
    }
}


export const fetchRecipes = () => {
    const API_KEY = 'ba0505e0cc1248e099029029ee609b79';
    return (dispatch) => {
        dispatch(loadingRecipes())
        return fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipeColletctions => dispatch(sendingRecipes(recipeColletctions.recipes)))
    }
} 

// search query
export const searchRecipes = (state) => {
    const API_KEY = 'ba0505e0cc1248e099029029ee609b79';
    return (dispatch) => {
        dispatch(loadingRecipes())
        return fetch(`https://api.spoonacular.com/recipes/search?query=${state.query}&diet=${state.diet}&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipes => dispatch(sendingRecipes(recipes.results)))
    }
}
