import { CommonService } from './../../services/common.service';
import { QueryResourceService } from 'src/app/api/services';
import { FreightDTO } from './../../api/models/freight-dto';
import { FreightView } from './../../dtos/freight-view';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  freightViews:FreightView[]=[];
  constructor(private queryResourceService:QueryResourceService,
    private commonService:CommonService,
    public activatedRoute : ActivatedRoute,
    private router:Router) {
      this.activatedRoute.queryParams.subscribe((res)=>{
        console.log(res);
        let freightView=new FreightView();
        freightView.freight=res;
       this.freightViews.push(freightView);
  
        });
  }

  ngOnInit() {
    this.commonService.getCurrentUser().then((res1:any)=>{
      console.log('>>>>>>>>>>',res1.id);
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
  showQuotes(freightDTO:any){
    this.router.navigate(['/quotes'],{
      queryParams: freightDTO,
      });

  }

}
