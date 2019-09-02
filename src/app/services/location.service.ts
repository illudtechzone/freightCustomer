import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems = [];
  private  placeSearch;

  private currentLat: number;
  private currentLon: number;
  private geocoder: any;


  constructor(private zone: NgZone) {
                this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
                this.autocomplete = { input: '' };
                this.autocompleteItems = [];
               }

  getAdressPredictions(searchTerm: string): Promise<any[]> {
    console.log('In the service location ');
    return new Promise<number[]>((resolve, reject) => {

      this.GoogleAutocomplete.getPlacePredictions({ input: searchTerm },
        (predictions, status) => {
          this.autocompleteItems = [];
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
          console.log('result...', this.autocompleteItems);
          resolve(this.autocompleteItems);
        }, err => {
          console.log('err...', err);
        });

    });
  }



}
