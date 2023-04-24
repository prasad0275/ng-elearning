import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';

const routes : Routes = [
  // { path:'',component: ClassComponent}
]

@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ClassComponent,
    RouterModule
  ]
})
export class ClassModule { }
