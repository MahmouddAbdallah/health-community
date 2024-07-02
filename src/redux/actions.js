export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({ type: FETCH_ARTICLES_REQUEST });
export const fetchArticlesSuccess = (data) => ({ type: FETCH_ARTICLES_SUCCESS, payload: data });
export const fetchArticlesFailure = (error) => ({ type: FETCH_ARTICLES_FAILURE, payload: error });

export const FETCH_NOTIFICATION_REQUEST = 'FETCH_NOTIFICATION_REQUEST';
export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_NOTIFICATION_FAILURE = 'FETCH_NOTIFICATION_FAILURE';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';

export const fetchNotificationRequest = (action) => ({ type: FETCH_NOTIFICATION_REQUEST, ...action });
export const fetchNotificationSuccess = (data) => ({ type: FETCH_NOTIFICATION_SUCCESS, payload: data })
export const fetchNotificationFailure = (error) => ({ type: FETCH_NOTIFICATION_FAILURE, payload: error })
export const updateNotification = (data) => ({ type: UPDATE_NOTIFICATION, payload: data })

export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const fetchSearchRequest = (action) => ({ type: FETCH_SEARCH_REQUEST, action })
export const fetchSearchSuccess = (data) => ({ type: FETCH_SEARCH_SUCCESS, payload: data })
export const fetchSearchFailure = (error) => ({ type: FETCH_SEARCH_FAILURE, payload: error })

export const messagesAction = {
    FETCH_MESSAGES_REQUEST: 'FETCH_MESSAGES_REQUEST',
    FETCH_MESSAGES_SUCCESS: 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_FAILURE: 'FETCH_MESSAGES_FAILURE',
    UPDATE_MESSAGES: 'UPDATE_MESSAGES'
}

export const fetchMessagesRequest = (action) => ({ type: messagesAction.FETCH_MESSAGES_REQUEST, action })
export const fetchMessagesSuccess = (data) => ({ type: messagesAction.FETCH_MESSAGES_SUCCESS, payload: data })
export const fetchMessagesFailure = (error) => ({ type: messagesAction.FETCH_MESSAGES_FAILURE, payload: error })
export const updateMessages = (data) => ({ type: messagesAction.UPDATE_MESSAGES, payload: data })

export const chatsAction = {
    FETCH_MESSAGES_REQUEST: 'FETCH_CHATS_REQUEST',
    FETCH_CHATS_SUCCESS: 'FETCH_CHATS_SUCCESS',
    FETCH_CHATS_FAILURE: 'FETCH_CHATS_FAILURE',
    UPDATE_CHATS: 'UPDATE_CHATS'
}

export const fetchChatsRequest = () => ({ type: chatsAction.FETCH_MESSAGES_REQUEST })
export const fetchChatsSuccess = (data) => ({ type: chatsAction.FETCH_CHATS_SUCCESS, payload: data })
export const fetchChatsFailure = (error) => ({ type: chatsAction.FETCH_CHATS_FAILURE, payload: error })
export const updateChats = (data) => ({ type: chatsAction.UPDATE_CHATS, payload: data })

export const cartAction = {
    ADD_CART: 'ADD_CART',
    DELETE_CART: 'DELETE_CART',
    FETCH_CARTS_REQUEST: 'FETCH_CARTS_REQUEST',
    FETCH_CARTS_SUCCESS: 'FETCH_CARTS_SUCCESS',
    FETCH_CARTS_FAILURE: 'FETCH_CARTS_FAILURE',
    UPDATE_CARTS: 'UPDATE_CARTS'
}

export const fetchCartsRequest = (action) => ({ type: cartAction.FETCH_CARTS_REQUEST, action })
export const fetchCartsSuccess = (data) => ({ type: cartAction.FETCH_CARTS_SUCCESS, payload: data })
export const fetchCartsFailure = (error) => ({ type: cartAction.FETCH_CARTS_FAILURE, payload: error })