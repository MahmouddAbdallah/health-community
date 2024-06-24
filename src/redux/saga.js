// sagas.js
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_ARTICLES_REQUEST, fetchArticlesSuccess, fetchArticlesFailure, fetchNotificationFailure, fetchNotificationSuccess, UPDATE_NOTIFICATION } from './actions';
import axios from 'axios';

function* fetchArticles() {
    try {
        const response = yield call(fetch, 'https://wellnease.onrender.com/api/blog/article?limit=5');
        const data = yield response.json();
        yield put(fetchArticlesSuccess(data));
    } catch (error) {
        yield put(fetchArticlesFailure(error.message));
    }
}

function* watchFetchArticles() {
    yield takeEvery(FETCH_ARTICLES_REQUEST, fetchArticles);
}

function* fetchNotification(action) {
    try {
        const { limit } = action;
        const { data } = yield call(axios.get, `/api/notification?limit=${limit}`);
        yield put(fetchNotificationSuccess(data));
    } catch (error) {
        yield put(fetchNotificationFailure(error.message))
    }
}


function* watchFetchNotification() {
    yield takeEvery('FETCH_NOTIFICATION_REQUEST', fetchNotification);
}
function* updateNotification(data) {
    yield put(updateNotification(data))
}
function* watchUpdateNotification() {
    yield takeEvery(UPDATE_NOTIFICATION, updateNotification);
}

export default function* rootSaga() {
    yield all([
        watchFetchArticles(),
        watchFetchNotification(),
        watchUpdateNotification()
    ]);
}
