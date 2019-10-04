import { QuotationDTO } from './../../api/models/quotation-dto';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-owner-response',
  templateUrl: './owner-response.component.html',
  styleUrls: ['./owner-response.component.scss'],
})
export class OwnerResponseComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input("quote") qoute:QuotationDTO;
  constructor() { }
  response:string='pending';
  ngOnInit() {}
  accept(){
    this.response='accept';
    this.valueChange.emit(this.response);
  }
  reject(){
    this.response='reject';
  }

}
