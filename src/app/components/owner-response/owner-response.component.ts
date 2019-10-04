import { QuotationDTO } from './../../api/models/quotation-dto';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-owner-response',
  templateUrl: './owner-response.component.html',
  styleUrls: ['./owner-response.component.scss'],
})
export class OwnerResponseComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input("quote") quote:QuotationDTO;
  constructor() { }
  response:string='pending';
  ngOnInit() {}
  accept(){
    this.response='accept';
    this.valueChange.emit({response:this.response,quotationId:this.quote.id});
  }
  reject(){
    this.response='reject';
    this.valueChange.emit({response:this.response,quotationId:this.quote.id});

  }

}
