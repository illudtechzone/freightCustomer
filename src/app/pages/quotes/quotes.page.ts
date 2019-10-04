import { QuotationDTO } from './../../api/models/quotation-dto';
import { Component, OnInit } from '@angular/core';
import { FreightView } from 'src/app/dtos/freight-view';
import { QueryResourceService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  freightView:FreightView={freight:{},isMoreInfo:false,isEdit:false};

  private quotes:QuotationDTO[]=[];

  constructor(private queryResource:QueryResourceService,
    public activatedRoute : ActivatedRoute,) { 

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res);
      this.freightView.freight=res;
      this.queryResource.findAllQuotationsUsingGET({freightId:this.freightView.freight.id}).subscribe((res2:any)=>{

        this.quotes=res2;

      });
  });

  }
  ngOnInit() {

     this.queryResource.findAllQuotationsUsingGET({freightId:this.freightView.freight.id}).subscribe
  }
  showResponse(event){
    console.log('xxxxxxxxx',event);
  }



}
