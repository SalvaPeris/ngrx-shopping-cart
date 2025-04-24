import { createActionGroup, props } from "@ngrx/store";
import { Product } from "../models/product.model";

export const CartActions = createActionGroup({
    source: 'Cart',
    events: {
        'Add Product': props<{ product: Product }>(),
    }
});

export const CartApiActions = createActionGroup({
    source: 'Cart API',
    events: {
        'Load Products Success': props<{ products: Product[] }>(),
        'Load Products Failure': props<{ error: string }>()
    }
});

