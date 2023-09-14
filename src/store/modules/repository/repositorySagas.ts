import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {
  getRepositoriesSuccessAction,
  getRepositoriesFailureAction,
  Repository,
} from './repositorySlice';
import {AxiosResponse} from 'axios';
import api from '../../../services/api';

type PayloadActionType = PayloadAction<{q: string; page: number}>;

function* getRepositoriesSaga({payload: {page, q}}: PayloadActionType) {
  try {
    const response: AxiosResponse<{items: Repository[]}> = yield api.get('', {
      params: {
        q,
        page,
        per_page: 10,
      },
    });

    if (page > 1) {
      yield put(
        getRepositoriesSuccessAction({
          repositories: response.data.items,
          increment: true,
        }),
      );
      return;
    }

    yield put(
      getRepositoriesSuccessAction({
        repositories: response.data.items,
        increment: false,
      }),
    );
  } catch (error) {
    yield put(getRepositoriesFailureAction());
  }
}

// Generator function
export function* watchGetRepositories() {
  yield takeLatest('repository/getRepositoriesAction', getRepositoriesSaga);
}
