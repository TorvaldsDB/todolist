import{ put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initTodoList } from './actionCreators';

function* fetchInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = yield initTodoList(res.data);
    yield put(action);
  } catch (e) {
    console.log('list.json网络请求失败')
  }
}

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, fetchInitList)
}

export default todoSagas;
