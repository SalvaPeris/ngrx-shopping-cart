import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import { Store } from '@ngrx/store';
import { selectCart, selectCartTotal } from '../../../state/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { CartActions } from '../../../state/cart/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
    cart$: Observable<ReadonlyArray<Product>>;
    cartTotal$: Observable<number>;

    constructor(private store: Store){
        this.cart$ = this.store.select(selectCart);
        this.cartTotal$ = this.store.select(selectCartTotal);
    }

    ngOnInit(): void {
    }

    onRemoveFromCart(id: string){
        this.store.dispatch(CartActions.removeProduct({ id }));
    }

    onQuantityChange(event: Event, productId: string){}
}
