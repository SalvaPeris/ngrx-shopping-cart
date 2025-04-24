import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartActions, CartApiActions } from "./cart.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Injectable()
export class CartEffects {
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map(products => CartApiActions.loadProductsSuccess({ products })),
                    catchError(error => of(CartApiActions.loadProductsFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private productService: ProductService
      ) {}
}

