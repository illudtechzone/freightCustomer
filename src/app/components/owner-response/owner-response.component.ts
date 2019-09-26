import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-owner-response',
  templateUrl: './owner-response.component.html',
  styleUrls: ['./owner-response.component.scss'],
})
export class OwnerResponseComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
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
