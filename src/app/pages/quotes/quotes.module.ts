import { OwnerResponseComponent } from './../../components/owner-response/owner-response.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuotesPage } from './quotes.page';
import { TransportationDataComponent } from 'src/app/components/transportation-data/transportation-data.component';
import { SharedModule } from 'src/app/components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: QuotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuotesPage],
  entryComponents:[TransportationDataComponent,OwnerResponseComponent]
})
export class QuotesPageModule {}
