import {put, takeLatest, call} from "redux-saga/effects";
import { GET_PRODUCTS, setProducts } from "../actions";
import { fetchProducts } from "../../api/handler";

function* handleGetProducts(arg) {
    try {
        const response = yield call(fetchProducts, arg.param);
        yield put(setProducts(response.data.products));
    }catch(err) {
        console.log(err);
    }
}

export function* productsSaga() {
    yield takeLatest(GET_PRODUCTS, handleGetProducts)
}