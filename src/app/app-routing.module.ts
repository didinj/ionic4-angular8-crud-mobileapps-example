import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'product-detail/:id', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)},
  { path: 'product-add', loadChildren: () => import('./product-add/product-add.module').then(m => m.ProductAddPageModule)},
  { path: 'product-edit/:id', loadChildren: () => import('./product-edit/product-edit.module').then(m => m.ProductEditPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
