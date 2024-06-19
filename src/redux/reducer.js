import { FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_SUCCESS } from "./actions"
const initialState = {}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_REQUEST:
            return { ...state.article, loading: true, error: null };
        case FETCH_ARTICLES_SUCCESS:
            return { ...state.article, loading: false, data: action.payload };
        case FETCH_ARTICLES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default Reducer