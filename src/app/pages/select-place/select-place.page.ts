import { Route } from 'src/app/dtos/route';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.page.html',
  styleUrls: ['./select-place.page.scss'],
})
export class SelectPlacePage implements OnInit {

  autocompleteItems = [];
  route: Route = new Route();
  currentSearchBar = 'from';
  requestButton=false;
  constructor(private util: UtilService,
              private toastController: ToastController,
              private locationService: LocationService

    ) {


    }



  ngOnInit() {
       this.autocompleteItems = [];
  }
// auto complete//////////

updateSearchResults(searchBar: string) {

  console.log('searching...');
  this.currentSearchBar = searchBar;
  let data = '';
  if (this.currentSearchBar === 'from') {
    data = this.route.fromAddress;


  } else {
    data = this.route.toAddress;

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

  if (this.currentSearchBar === 'from') {
    this.route.fromAddress = item.description;
    this.route.fromPlaceId = item.place_id;
  } else {
    this.route.toAddress = item.description;
    this.route.toPlaceId = item.place_id;
  }
  this.requestButton=!(this.route.fromPlaceId!=='' && this.route.toPlaceId!=='');
  console.log('current route is ', this.requestButton);

}
}
