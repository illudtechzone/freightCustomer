import { TransportationDataComponent } from './transportation-data/transportation-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OwnerResponseComponent } from './owner-response/owner-response.component';



@NgModule({
  declarations: [TransportationDataComponent,OwnerResponseComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[TransportationDataComponent,OwnerResponseComponent]
})
export class SharedModule { }
