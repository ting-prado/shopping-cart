import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import { GET_CATEGORIES, setCategories } from "../actions";

function* handleGetCategories() {
    try {
        const response = yield axios.get("https://dummyjson.com/products/categories");
        yield put(setCategories(response.data.slice(0, 7)))
    }catch(err) {
        console.log(err);
    }
}

export function* categoriesSaga() {
    yield takeLatest(GET_CATEGORIES, handleGetCategories)
}