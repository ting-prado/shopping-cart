export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const addToCart = (item) => ({
	type: ADD_TO_CART,
	item
});

export const removeFromCart = (item) => ({
	type: REMOVE_FROM_CART,
	item
});

export const updateCart = (item) => ({
	type: UPDATE_CART,
	item
});

export const getProducts = (arg) => ({
	type: GET_PRODUCTS,
	param: arg
});

export const setProducts = (products) => ({
	type: SET_PRODUCTS,
	products
});

export const getCategories = () => ({
	type: GET_CATEGORIES
});

export const setCategories = (categories) => ({
	type: SET_CATEGORIES,
	categories
});
