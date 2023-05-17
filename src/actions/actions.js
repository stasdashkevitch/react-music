export const tracksFetching = () => {
    return {
        type: 'TRACKS_FETCHING'
    }
}

export const tracksFetched = (tracks) => {
    return {
        type: 'TRACKS_FETCHED',
        payload: tracks
    }
}

export const tracksErrorFetching = () => {
    return {
        type: 'TRACKS_FETCHING_ERROR',
    }
}

export const setCategories = (categories) => {
    return {
        type: 'CATEGORIES',
        payload: categories
    }
}

export const setCategoriesUrl = (categoriesUrl) => {
    return {
        type: 'SET_CATEGORIES',
        payload: categoriesUrl
    }
} 

export const plailistsFetching = () => {
    return {
        type: 'PLAYLISTS_FETCHING'
    }
}

export const plailistFetched = (plailists) => {
    return {
        type: 'PLSILISTS_FETCHED',
        payload: plailists
    }
}

export const plailistsErrorFetching = () => {
    return {
        type: 'PLAILISTS_FETCHING_ERROR',
    }
}

export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}