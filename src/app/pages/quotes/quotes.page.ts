import { Component, OnInit } from '@angular/core';
import { FreightView } from 'src/app/dtos/freight-view';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  freightView:FreightView={freight:{},isMoreInfo:false,isEdit:false};
  constructor() { }

  ngOnInit() {
  }
  showResponse(event){
    console.log('xxxxxxxxx',event);
  }

}
