import {all, fork} from 'redux-saga/effects';
import {watchGetRepositories} from './modules/repository/repositorySagas';

const rootSaga = function* () {
  yield all([fork(watchGetRepositories)]);
};

export default rootSaga;
