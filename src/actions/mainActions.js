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

export const sendingRecipeDetails = recipe => {
    const recipeData = {
        title: recipe.title, 
        recipeId: recipe.id,
        image: recipe.image.includes("http") ? recipe.image : `https://spoonacular.com/recipeImages/${recipe.image}`,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenfree: recipe.glutenFree,
        dairyfree: recipe.dairyFree,
        ketogenic: recipe.ketogenic,
        whole30: recipe.whole30,
        instructions: recipe.instructions,
        ingredients: recipe.extendedIngredients
    }
    return {
        type: 'UPLOADING_RECIPE',
        payload: recipeData
    }
}

export const incrementFavorite = () => {
    return {
        type: 'INCREMENT_FAVORITE',
    }
}


export const settingFavorite = (numberOfLikes) => {
    return {
        type: 'LOADING_NUMBER_OF_LIKES',
        payload: numberOfLikes
    }
}

export const settingReviews = (reviewArray) => {
        return {
            type: 'LOADING_REVIEWS',
            payload: reviewArray
        }
    }

export const resetFavoriteAndReview = () => {
    return {
        type: 'RESET_FAVORITE_AND_REVIEWS',
    }
}

export const displayReview = (review) => {
    return {
        type: 'DISPLAY_REVIEW',
        payload: review
    }
}

export const recipeShow = (apiId, history) => {
    const API_KEY = 'ba0505e0cc1248e099029029ee609b79';
    return (dispatch) => {
        return fetch(`https://api.spoonacular.com/recipes/${apiId}/information?apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipe => {
            dispatch(sendingRecipeDetails(recipe))
            history.push(`/recipes/${recipe.id}`)
         })
    }
}

export const clickLike = (recipe, userId, review) => {
    const HEROKU_URL = 'http://localhost:5000/'
    return (dispatch) => {
        const dataForRails = {
            title: recipe.title,
            image: recipe.image,
            api_id: recipe.recipeId,
            favorite: {like: true, review: review,user_id: userId}
        }
        return fetch(`${HEROKU_URL}/api/v1/recipes` ,{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataForRails)
        })
        .then(resp => resp.json())
        .then(recipe => {
             dispatch(incrementFavorite()) 
         })
    }
}


export const loadingFavorite = (apiId) => {
    const HEROKU_URL = 'http://localhost:5000/'
    return (dispatch) => {
        return fetch(`${HEROKU_URL}/api/v1/recipes` ,{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(recipes => { //console.log(recipes)
            recipes.map(recipe => {   
                if (recipe.api_id === apiId) {      
                    const numberOfLikes = recipe.favorites.filter(fav => fav.like).length

                    let reviewArray = [];

                    recipe.favorites.forEach(fav => {
                        reviewArray.push({review: fav.review, username:fav.user_name})
                    }) 
                    
                    //console.log("reviewArray", reviewArray)
                    dispatch(settingFavorite(numberOfLikes))
                    dispatch(settingReviews(reviewArray))
                } else {
                    console.log("there is no matching")
                }
            })
         })
    }
}

