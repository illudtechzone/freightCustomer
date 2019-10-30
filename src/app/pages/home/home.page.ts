import { CommonService } from './../../services/common.service';
import { QueryResourceService } from 'src/app/api/services';
import { FreightView } from './../../dtos/freight-view';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { JhiWebSocketService } from 'src/app/services/jhi-web-socket.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { QuotationDTO } from 'src/app/api/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentName:string='requested';
  freightViews:FreightView[]=[];
  data:any=null;

  constructor(private queryResourceService:QueryResourceService,
    private commonService:CommonService,
    public activatedRoute : ActivatedRoute,
    private router:Router,private notification: JhiWebSocketService,private localNotification: LocalNotifications) {
      this.activatedRoute.queryParams.subscribe((res)=>{
        console.log('got nav params ',res);
        if(res.pickupAddress!== undefined){
          console.log('got nav params ',res.pickupAddress);
        let freightView=new FreightView();
        freightView.freight=res;
       this.freightViews.push(freightView);

        }

        });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.freightViews=[];
    this.findAllFreights();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
findAllFreights()
{
  this.commonService.getCurrentUser().then((res1:any)=>{
    console.log('>>>>>>>>>>',res1.customerIdpCode);
    this.notification.connect(res1.customerIdpCode);
    this.notification.subscribe();
    this.notification.receive().subscribe(data=>
      {
        console.log("new data::::: :: ::::::::::::::::::"+JSON.stringify(data.body));
        this.data=data;
        this.single_notification(this.data.body);
      });
    this.queryResourceService.findAllFreightsByCustomerIdUsingGET({customerId:res1.id})
    .subscribe((res2:any)=>
    {
        for (let freight of res2) {
          let freightView:FreightView=new FreightView();
          freightView.freight=freight;
          console.log('  freights ==',freightView);
           this.freightViews.push(freightView);
        }
        console.log('freight vies are ',this.freightViews);


    },err=>{
      console.log('error geting freights',err);
    });
  });
}  
single_notification(qdto) {
  
  this.localNotification.schedule({
    id: 1,
    text: 'New Quotation ',
    data:qdto
  });
  this.localNotification.on("click").subscribe(x=>{
    console.log("on cliccccccccccccccccccccccccckkkkkkkkkk"+JSON.stringify(x));
    this.redirectQuotation(x.data);
  
  });
}
redirectQuotation(qdto:QuotationDTO)
{
 const fw: FreightView[]=this.freightViews.filter(view=>
    {
  view.freight.id=qdto.freightId;
    });
    console.log(this.freightViews.length+"filtered value"+JSON.stringify(fw));
    this.showQuotes(JSON.stringify(fw[0].freight));
}


  ngOnInit() {
    this.findAllFreights();


  }
  showQuotes(freightDTO:any){
    this.router.navigate(['/quotes'],{
      queryParams: freightDTO,
      });

  }

  segmentChanged(event){

console.log('segment event is ',event.detail.value);
this.segmentName=event.detail.value;
  }

}
