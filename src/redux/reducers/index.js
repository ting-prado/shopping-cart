import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS, SET_CATEGORIES } from "../actions";

const initialState = {
    products: [],
    categories: [],
    cartList: [],
    cartCount: 0
}

const reducer = (state = initialState, action) => {
    const {item, products, categories} = action;
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: products
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartCount: state.cartCount++,
                cartList: state.cartList.concat(item)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartCount: state.cartCount--,
                cartList: state.cartList.filter(prod => prod !== item)
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: categories
            }
        default:
            return state;
    }
}

export default reducer;