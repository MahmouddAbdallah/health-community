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

export const fetchMessagesRequest = (action) => ({ type: messagesAction.FETCH_MESSAGES_FAILURE, action })
export const fetchMessagesSuccess = (data) => ({ type: messagesAction.FETCH_MESSAGES_SUCCESS, payload: data })
export const fetchMessagesFailure = (error) => ({ type: messagesAction.FETCH_MESSAGES_FAILURE, payload: error })

export const updateMessages = (data) => ({ type: messagesAction.UPDATE_MESSAGES, payload: data })