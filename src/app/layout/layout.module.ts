import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,

  ]
})
export class LayoutModule { }
