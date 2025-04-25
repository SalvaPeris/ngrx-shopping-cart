import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { CartTotal } from "../../models/cart-total.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
export const selectCart = createFeatureSelector<ReadonlyArray<Product>>('cart');
export const selectCartTotal = createSelector(selectCart, (cart): CartTotal => 
{
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

    return {
        items: totalItems,
        price: totalPrice
    }
});