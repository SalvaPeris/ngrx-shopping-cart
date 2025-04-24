import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../state/cart/cart.actions';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import { selectProducts } from '../../../state/cart/cart.selector';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products$!: Observable<ReadonlyArray<Product>>;

    constructor(private store: Store) {}

    ngOnInit(): void {
      this.store.dispatch(CartActions.loadProducts());
      this.products$ = this.store.select(selectProducts);
    }

    onAddToCart(product: Product) {
      this.store.dispatch(CartActions.addProduct({ product }));
    }
}
