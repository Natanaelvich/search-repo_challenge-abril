import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {
  getRepositoriesSuccessAction,
  getRepositoriesFailureAction,
  Repository,
} from './repositorySlice';
import {AxiosResponse} from 'axios';
import api from '../../../services/api';

type PayloadActionType = PayloadAction<string>;

function* getRepositoriesSaga(action: PayloadActionType) {
  try {
    const response: AxiosResponse<{items: Repository[]}> = yield api.get('', {
      params: {
        q: action.payload,
        per_page: 10,
        page: 1,
      },
    });

    yield put(getRepositoriesSuccessAction(response.data.items));
  } catch (error) {
    yield put(getRepositoriesFailureAction());
  }
}

// Generator function
export function* watchGetRepositories() {
  yield takeLatest('repository/getRepositoriesAction', getRepositoriesSaga);
}
