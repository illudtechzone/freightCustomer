import { QueryResourceService } from 'src/app/api/services';
import { QuotationDTO } from './../../api/models/quotation-dto';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/api/models';

@Component({
  selector: 'app-owner-response',
  templateUrl: './owner-response.component.html',
  styleUrls: ['./owner-response.component.scss'],
})
export class OwnerResponseComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input("quote") quote:QuotationDTO;
  company: Observable<Company>;
  constructor(private queryResource:QueryResourceService) { }
  response:string='pending';
  ngOnInit() {
  this.company=  this.queryResource.findCompanyByIdUsingGET(this.quote.companyId)
  }
  accept(){
    this.response='accept';
    this.valueChange.emit({response:this.response,quotationId:this.quote.id});
  }
  reject(){
    this.response='return';
    this.valueChange.emit({response:this.response,quotationId:this.quote.id});

  }

  

    
  

}
