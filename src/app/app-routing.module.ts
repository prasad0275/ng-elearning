import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { LayoutModule } from './layout/layout.module';
import { AppModule } from './app.module';
import { HomeComponent } from './layout/home/home.component';
import { ProductCardComponent } from './product/product-card/product-card.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductCardComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
