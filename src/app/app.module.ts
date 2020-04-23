import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './Product/product/product.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ProductModule //feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
