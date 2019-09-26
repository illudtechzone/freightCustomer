import { FreightView } from './../../dtos/freight-view';
import { Component, OnInit, Input } from '@angular/core';
import { FreightDTO } from 'src/app/api/models';

@Component({
  selector: 'app-transportation-data',
  templateUrl: './transportation-data.component.html',
  styleUrls: ['./transportation-data.component.scss'],
})
export class TransportationDataComponent implements OnInit {
  @Input('freightView')freightView: any;
  constructor() { }

  ngOnInit() {
    console.log('is more info',this.freightView);

  }

  moreInfo(){
    console.log('is more info',this.freightView);
    this.freightView.isMoreInfo=!this.freightView.isMoreInfo;
    console.log('is more info',this.freightView.isMoreInfo);

  }

}
