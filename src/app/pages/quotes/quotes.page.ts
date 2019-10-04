import { QuotationDTO } from './../../api/models/quotation-dto';
import { Component, OnInit } from '@angular/core';
import { FreightView } from 'src/app/dtos/freight-view';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
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
    public activatedRoute : ActivatedRoute,
    private commandService:CommandResourceService) { 

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res);
      this.freightView.freight=res;
      this.queryResource.findAllQuotationsUsingGET({freightId:this.freightView.freight.id}).subscribe((res2:any)=>{
        console.log('the avalable qoutetions are',res2);
        this.quotes=res2;

      });
  });

  }
  ngOnInit() {

     this.queryResource.findAllQuotationsUsingGET({freightId:this.freightView.freight.id}).subscribe
  }
  showResponse(event){
    console.log('xxxxx',event);
      this.queryResource.getTasksUsingGET({processInstanceId:this.freightView.freight.trackingId}).subscribe((res1:any)=>{
        console.log(' got task   ',res1.data[0]);
        console.log(' got task id  ',res1.data[0].id);
        this.commandService.customerStatusUsingPOST({taskId:res1.data[0].id,customerStatus:{quotationId:event.quotationId,status:event.response,trackingId:this.freightView.freight.trackingId}}).subscribe(
          (res2:any)=>{
            console.log('sent resonse ',res2);
          },err2=>{
            console.log('error senting resonse ',err2);

          });
        
      },err=>{
        console.log('error getting tgask ',err);
      });
     
    }



}
