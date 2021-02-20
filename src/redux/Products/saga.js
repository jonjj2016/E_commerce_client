import { call,all,takeLatest, takeEvery,put } from 'redux-saga/effects';
import { actions, types } from './actions';
import apiGen from '../../utils/utils';


console.log(types,actions);


function* get() {
  try {
    yield put(actions.loading());
    const res = yield call(apiGen,"get", "http://localhost:4000/api/products");
    yield put(actions.get_success(res.data))
    
  } catch (error) {
    console.log(error);
    yield put(actions.get_failed(error.message))
  }
};
function* find(params) {
  try {
    yield put(actions.loading());
    const res = yield call(apiGen, "get", `http://localhost:4000/api/products/${params.payload}`);
    yield put(actions.find_success(res.data));
    
  } catch (error) {
     yield put(actions.find_failed(error.message))
  }
}


function* onGet() {
  yield takeEvery(types.GET_START,get)
};

function * onFind() {
  yield takeLatest(types.FIND_START,find)
}
export default function* () {
  yield all([call(onGet),call(onFind)])
}
