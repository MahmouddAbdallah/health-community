export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({ type: FETCH_ARTICLES_REQUEST });
export const fetchArticlesSuccess = (data) => ({ type: FETCH_ARTICLES_SUCCESS, payload: data });
export const fetchArticlesFailure = (error) => ({ type: FETCH_ARTICLES_FAILURE, payload: error });

// export const FETCH_ARTICLE_REQUEST = 'FETCH_ARTICLE_REQUEST';
// export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
// export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

// export const fetchDataRequest = () => ({ type: FETCH_ARTICLE_REQUEST });
// export const fetchDataSuccess = (data) => ({ type: FETCH_ARTICLE_SUCCESS, payload: data });
// export const fetchDataFailure = (error) => ({ type: FETCH_ARTICLE_FAILURE, payload: error });

export const FETCH_NOTIFICATION_REQUEST = 'FETCH_NOTIFICATION_REQUEST';
export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_NOTIFICATION_FAILURE = 'FETCH_NOTIFICATION_FAILURE';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';

export const fetchNotificationRequest = (action) => ({ type: FETCH_NOTIFICATION_REQUEST, ...action });
export const fetchNotificationSuccess = (data) => ({ type: FETCH_NOTIFICATION_SUCCESS, payload: data })
export const fetchNotificationFailure = (error) => ({ type: FETCH_NOTIFICATION_FAILURE, payload: error })
