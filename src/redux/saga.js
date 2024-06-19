// sagas.js
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_ARTICLES_REQUEST, fetchArticlesSuccess, fetchArticlesFailure } from './actions';

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

export default function* rootSaga() {
    yield all([
        watchFetchArticles(),
    ]);
}
