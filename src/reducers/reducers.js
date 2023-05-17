const initialState = {
    token: '',
    tracks: [],
    tracksStatus: 'idle',
    categories: [],
    categoriesUrl: '',
    playlists: [],
    playlistsStatus: 'idle'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TRACKS_FETCHING':
            return {
                ...state,
                tracksStatus: 'loading'
            }
        case 'TRACKS_FETCHED':
            return {
                ...state,
                tracks: action.payload,
                tracksStatus: 'idle',
            }
        case 'TRACKS_FETCHING_ERROR': 
            return {
                ...state,
                tracksStatus: 'error'
        }
        case 'CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categoriesUrl: action.payload
            }
            case 'PLAYLISTS_FETCHING':
                return {
                    ...state,
                    playlistsStatus: 'loading'
                }
            case 'PLSILISTS_FETCHED':
                return {
                    ...state,
                    playlists: action.payload,
                    playlistsStatus: 'idle',
                }
            case 'PLAILISTS_FETCHING_ERROR': 
                return {
                    ...state,
                    playlistsStatus: 'error'
            }
        case 'SET_TOKEN': {
            return {
                ...state,
                token: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;