import { takeLatest, call, select } from 'redux-saga/effects';
import Api from 'utils/Api';
import { makeSelectToken } from '../App/selectors';
import * as types from './constants';
import * as actions from './actions';

function* loadFourorg(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      'home/fourorg',
      actions.loadFourorgSuccess,
      actions.loadFourorgFailure,
      token,
    ),
  );
}

export default function* defaultSaga() {
  yield takeLatest(types.LOAD_FOURORG_REQUEST, loadFourorg);
}