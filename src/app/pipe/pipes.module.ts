


import { QuotationPipe } from './QuotationPipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [QuotationPipe],
  imports: [
    CommonModule
  ],
  exports:[QuotationPipe]
})
export class PipesModule { }
