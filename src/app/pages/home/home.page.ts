import { FreightDTO } from './../../api/models/freight-dto';
import { FreightView } from './../../dtos/freight-view';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  freightView:FreightView={freight:{},isMoreInfo:false,isEdit:false};
  constructor() {}

}
