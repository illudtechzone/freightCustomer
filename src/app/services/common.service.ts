import { UtilService } from './util.service';
import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { Route } from '../dtos/route';
import { QueryResourceService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  route:Route=new Route();
  constructor(private currentUserService:CurrentUserService,
    private queryService:QueryResourceService,
    private util:UtilService) { }
  setRoute(route:Route){
    this.route=route;
  }
  getRoute():Route{
    return this.route;
  }

  getCurrentUser():Promise<any>{
    return new Promise((resolve, reject) => {
    this.currentUserService.getCurrentUser(false).then((res1:any)=>{

      console.log('got user ',res1);
      this.queryService.searchCustomerIDPCodeUsingGET(res1.prefered_username).subscribe((res2:any)=>{
        console.log('got userDetail ',res2);
          resolve(res2);
      },err=>{

        reject();
        this.util.createToast('ops! server might be down try again later');
      });


    });

  });
  }
}
