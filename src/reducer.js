export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover: null,
    current_playlist: null,
    curr_state: false,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER":
            return {
                ...state,
                discover: action.discover,
            }
        case "SET_CURRENT_PLAYLIST":
            return {
                ...state,
                current_playlist: action.current_playlist,
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }
        case "SET_STATE":
            return {
                ...state,
                curr_state: action.curr_state,
            }
        default:
            return state;
    }
};


export default reducer;