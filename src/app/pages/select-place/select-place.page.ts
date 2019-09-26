import { CommandResourceService } from 'src/app/api/services';
import { CommonService } from './../../services/common.service';
import { FreightDTO } from './../../api/models/freight-dto';
import { Route } from 'src/app/dtos/route';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.page.html',
  styleUrls: ['./select-place.page.scss'],
})
export class SelectPlacePage implements OnInit {
  date:any={};
  nextPage=false;
  autocompleteItems = [];
  route: Route = new Route();
  freightDTO:FreightDTO={};
  currentSearchBar = 'from';
  requestButton=false;
  constructor(private util: UtilService,
              private toastController: ToastController,
              private locationService: LocationService,
              private commonService:CommonService,
              private navCtrl:NavController,
              private commandResourceService:CommandResourceService
    ) {


    }


  ngOnInit() {
       this.autocompleteItems = [];
       this.commonService.getCurrentUser().then();
  }
// auto complete//////////

updateSearchResults(searchBar: string) {

  console.log('searching...');
  this.currentSearchBar = searchBar;
  let data = '';
  if (this.currentSearchBar === 'from') {
    data = this.freightDTO.pickupAddress;


  } else {
    data = this.freightDTO.destinationAddress;

  }
  if (data == '') {
    this.autocompleteItems = [];
    return;
  }
  this.locationService.getAdressPredictions(data).then((resp: any[]) => {
    this.autocompleteItems = resp;
  }, err => {
    console.log('prediction.err...g', err);

  });
}

async presentToast() {
  const mes = 'api key expired';
  const toast = await this.toastController.create({
    message: mes,
    duration: 2000
  });
  toast.present();
}


selectSearchResult(item: any) {

  console.log('selected item is ', item.description);
  console.log(' placeid is ',this.freightDTO.destinationPlaceId)
  if (this.currentSearchBar === 'from') {
    this.freightDTO.pickupAddress = item.description;
    this.freightDTO.pickupPlaceId = item.place_id;
  } else {
    this.freightDTO.destinationAddress = item.description;
    this.freightDTO.destinationPlaceId = item.place_id;
  }
  
  console.log('current route is ',this.freightDTO.destinationPlaceId,">>>>>>",this.freightDTO.pickupPlaceId);
  console.log('current route is ', this.requestButton);

}

  next(){
    this.nextPage=true;
  }

  selectGoodsType(event){
   
    console.log('type is >', event.detail.value);
    console.log('type is >',this.date);
    console.log('type freight >',this.freightDTO);
    
  }
  request(){
    this.freightDTO.deliveryDate=this.freightDTO.deliveryDate.split("T", 1)[0];
    console.log('splited date is ', this.freightDTO.deliveryDate); 
    this.commandResourceService.createFreightUsingPOST(this.freightDTO).subscribe((res1:any)=>{
      console.log(' created freight equest ',res1);
      this.navCtrl.navigateForward('/home');
    },err=>{
      console.log('Err creating freight equest ',err);
      this.util.createToast('ops!server might be down try again later');
      this.navCtrl.navigateForward('/home');

    })
  }
}
