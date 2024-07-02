import { combineReducers } from '@reduxjs/toolkit';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_FAILURE,
    FETCH_ARTICLES_SUCCESS,
    FETCH_NOTIFICATION_REQUEST,
    FETCH_NOTIFICATION_SUCCESS,
    UPDATE_NOTIFICATION,
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    messagesAction,
    cartAction,
    chatsAction
} from "./actions";

const initialState = {}

const article = (state = initialState, action) => {
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

const notification = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATION_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_NOTIFICATION_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_ARTICLES_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case UPDATE_NOTIFICATION:
            return { data: action.notification }
        default:
            return state;
    }
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SEARCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}
const messages = (state = { data: [] }, action) => {
    switch (action.type) {
        case messagesAction.FETCH_MESSAGES_REQUEST:
            return { ...state, loading: true, error: null };
        case messagesAction.FETCH_MESSAGES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case messagesAction.FETCH_MESSAGES_FAILURE:
            return { ...state, loading: false, error: action.payload, data: [] }
        case messagesAction.UPDATE_MESSAGES:
            state.data = [...state.data, action.payload]
            return { ...state }
        default:
            return state;
    }
}
const chats = (state = { data: [] }, action) => {
    switch (action.type) {
        case chatsAction.FETCH_MESSAGES_REQUEST:
            return { ...state, loading: true, error: null };
        case chatsAction.FETCH_CHATS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case chatsAction.FETCH_CHATS_FAILURE:
            return { ...state, loading: false, error: action.payload, data: [] }
        case chatsAction.UPDATE_CHATS: {
            const r = state.data.find(item => item._id == action.payload)
            const data = state.data.filter(item => item._id != action.payload)
            return { ...state, data: [r, ...data] }
        }
        default:
            return state;
    }
}
const cart = (state = { productIDs: [], count: 0 }, action) => {
    switch (action.type) {
        case cartAction.ADD_CART: {
            return { ...state, count: state.count + action.payload }
        }
        case cartAction.DELETE_CART: {
            return { ...state, count: state.count - 1 }
        }
        case cartAction.UPDATE_CARTS: {
            return { ...state, count: action.payload }
        }
        default:
            return state
    }
}

export default combineReducers({
    article,
    notification,
    search,
    messages,
    chats,
    cart
})