import { Injectable } from '@angular/core';
import { Route } from '../dtos/route';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  route:Route=new Route();
  constructor() { }
  setRoute(route:Route){
    this.route=route;
  }
  getRoute():Route{
    return this.route;
  }
}
