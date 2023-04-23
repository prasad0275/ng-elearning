import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path:'',component:ProductModule}
];

@NgModule({
  imports: [
    ProductModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
