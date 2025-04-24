import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './state/cart/cart.effects';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer, productsReducer } from './state/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    provideStore({
      products: productsReducer,
      cart: cartReducer
    }), 
    provideHttpClient(),
    provideEffects([CartEffects])]
};
