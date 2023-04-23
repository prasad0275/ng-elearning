import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    { path:'/prouduct', component:ProductComponent}
]

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductModule { }
