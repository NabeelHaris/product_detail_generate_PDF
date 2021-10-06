import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailTemplateComponent } from './detail-template/detail-template.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/detail-template',
    component: DetailTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
