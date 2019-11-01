import { CustomerDTO } from './../api/models/customer-dto';
import { UtilService } from './util.service';
import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { Route } from '../dtos/route';
import { QueryResourceService, AccountResourceService } from '../api/services';
import { Customer, UserDTO } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  route:Route=new Route();
  constructor(private currentUserService:CurrentUserService,
    private queryService:QueryResourceService,private accountResource: AccountResourceService,
    private util:UtilService) { };
    customer: CustomerDTO = null;
  user: UserDTO=null;
  setRoute(route:Route){
    this.route=route;
  }
  getRoute():Route{
    return this.route;
  }

  async getCurrentUser(){
    if (!(this.customer == null)) {
      console.log('company is found');
      return this.customer;
    } else {
      console.log('company is not found found');
      this.user = await this.accountResource.getAccountUsingGET().toPromise();
      this.customer = await this.queryService.searchCustomerIDPCodeUsingGET(this.user.login).toPromise();
      return this.customer;

}
    
  }


  clearCustomer()
  {
    this.customer=null;
    this.user=null;
  }
}
