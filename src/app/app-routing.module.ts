import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';


const routes: Routes = [
  
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
    canActivate: [authGuard]
  },

  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },

  { 
    path: 'home',
   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
   canActivate: [authGuard]
  },

  { 
    path: 'checkout',
     loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) 
  },

  { 
    path: 'not-found',
     loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  {
    path: '**',
    redirectTo: '/not-found'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
