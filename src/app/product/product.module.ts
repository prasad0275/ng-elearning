import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { ClassModule } from './class/class.module';
import { ClassComponent } from './class/class.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {
    path: 'class', component: ProductCardComponent,
  },
  // {
  //   path: 'class',component: ProductCardComponent ,
  // }

]

@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ClassModule,
  ],
  exports: [
    ProductCardComponent,

    RouterModule
  ]
})
export class ProductModule { }
