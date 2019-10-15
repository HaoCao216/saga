import { all, call, takeEvery, put } from 'redux-saga/effects'
import { requestDog, requestDogSuccess, requestDogError } from '../actions'
/* ------------- Connect Types To Sagas ------------- */

function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}

const rootSaga = function* root() {
  yield all([
    watchFetchDog,
  ])
}

export default rootSaga
