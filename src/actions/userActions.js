export const uploadingFavorite = recipes => {
    return {
        type: 'UPLOADING_FAVORITE',
        payload: recipes
    }
}

// My account page
export const loadingUserInfo = (currentUserId) => {
    const HEROKU_URL = 'http://localhost:5000/'
    return (dispatch) => {
        return fetch(`${HEROKU_URL}/api/v1/users/${currentUserId}` ,{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(userData => {//console.log("userData", userData)
        dispatch(uploadingFavorite(userData.recipes))
        })

    }
}
