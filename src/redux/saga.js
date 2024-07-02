// sagas.js
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
    FETCH_ARTICLES_REQUEST,
    fetchArticlesSuccess,
    fetchArticlesFailure,
    fetchNotificationFailure,
    fetchNotificationSuccess,
    UPDATE_NOTIFICATION,
    fetchSearchFailure,
    fetchSearchSuccess,
    FETCH_SEARCH_REQUEST,
    fetchMessagesFailure,
    fetchMessagesSuccess,
    messagesAction,
    fetchCartsFailure,
    fetchCartsSuccess,
    cartAction,
    fetchChatsSuccess,
    fetchChatsFailure,
    chatsAction
} from './actions';
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
        yield put(fetchNotificationSuccess(data.notification));
    } catch (error) {
        yield put(fetchNotificationFailure(error?.response?.data?.message || 'Failed to fetch notifications'));
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


function* fetchSearchData(action) {
    try {
        const { keyword, type } = action.payload
        const { data } = yield call(axios.get, `/api/search?keyword=${keyword}&type=${type}`)
        yield put(fetchSearchSuccess(data))
    } catch (error) {
        yield fetchSearchFailure(error?.response?.data?.message || 'There is error')
    }
}

function* watchFetchSearchData() {
    yield takeEvery(FETCH_SEARCH_REQUEST, fetchSearchData)
}


function* fetchMessagesData(action) {
    try {
        const { chatId } = action.payload;
        const { data } = yield call(axios.get, `/api/message/${chatId}?fields=sender,text&sort=createdAt`)
        yield put(fetchMessagesSuccess(data.messages))
    } catch (error) {
        yield fetchMessagesFailure(error)
    }
}

function* watchFetchMessages() {
    yield takeEvery(messagesAction.FETCH_MESSAGES_REQUEST, fetchMessagesData)
}


function* fetchChatsData() {
    try {
        const { data } = yield call(axios.get, `/api/chat?sort=-updatedAt`)
        yield put(fetchChatsSuccess(data.chats))
    } catch (error) {
        yield fetchChatsFailure(error)
    }
}

function* watchFetchChats() {
    yield takeEvery(chatsAction.FETCH_MESSAGES_REQUEST, fetchChatsData)
}

function* fetchCarts({ fields }) {
    try {
        const { data } = yield axios.get(`/api/store/cart?fields=${fields}`)
        yield put(fetchCartsSuccess(data.carts));
    } catch (error) {
        yield put(fetchCartsFailure(error))
    }
}

function* watchFetchCarts() {
    yield takeEvery(cartAction.FETCH_CARTS_REQUEST, fetchCarts)
}


export default function* rootSaga() {
    yield all([
        watchFetchArticles(),
        watchFetchNotification(),
        watchUpdateNotification(),
        watchFetchSearchData(),
        watchFetchMessages(),
        watchFetchCarts(),
        watchFetchChats()
    ]);
}
