import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDemoComponent } from '../product-demo/product-demo.component';



@NgModule({
  declarations: [ ProductDemoComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductDemoComponent]
})
export class ProductModule { }
