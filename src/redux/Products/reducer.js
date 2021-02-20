import { types } from './actions';

const initState = {
  loading: false,
  error: null,
  products: [],
  product:null
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.GET_SUCCESS:
      return { ...state, loading: false, error: null, products: payload.data };
    case types.FIND_SUCCESS:
      return { ...state, loading: false, error: null, product: payload.data };
    case types.FIND_FAILED:
    case types.GET_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state
  }
}