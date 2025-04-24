import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { CartActions, CartApiActions } from "./cart.actions";

export const initialProductsState: ReadonlyArray<Product> = [];
export const initialCartState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
    initialProductsState,
    on(CartApiActions.loadProductsSuccess, (_state, { products }) => products)
);

export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addProduct, (state, { product }) =>{
        const existingProduct = state.find(p => p.id === product.id);
        if (existingProduct) {
            return state.map(p => p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : { ...p, quantity: p.quantity });
        }
        return [...state, product];
    }),
    on(CartActions.removeProduct, (state, { id }) =>
        state.filter(p => p.id !== id)
    ),
    on(CartActions.updateQuantity, (state, { id, quantity }) => 
        state.map(p => 
            p.id === id ? { ...p, quantity } : p
        )
    )
);