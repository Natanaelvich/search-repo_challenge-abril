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
