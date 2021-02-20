import { call, all, } from 'redux-saga/effects';
import productSaga from './Products/saga';


export default function *() {
  yield all([call(productSaga)])
}