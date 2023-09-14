import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import api from '../../../../services/api';
import {
  getRepositoriesSuccessAction,
  getRepositoriesFailureAction,
  Repository,
} from './repositorySlice';
import {AxiosResponse} from 'axios';

type PayloadActionType = PayloadAction<string>;

// Generator function
function* getRepositoriesSaga(action: PayloadActionType) {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<Repository[]> = yield api.get('', {
      params: {
        q: action.payload,
        per_page: 10,
        page: 1,
      },
    });

    yield put(getRepositoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getRepositoriesFailureAction());
  }
}

// Generator function
export function* watchGetRepositories() {
  yield takeLatest('repository/getRepositoriesAction', getRepositoriesSaga);
}
