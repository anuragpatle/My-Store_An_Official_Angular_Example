import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  /* Note: that AddProductComponent is declared automatically */
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AddProductComponent,
  ]
})
export class AdminModule { }
