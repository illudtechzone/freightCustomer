import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { QueryResourceService } from '../api/services';
import { Quotation } from '../api/models';

@Pipe({
  name: 'qtlist'
})
export class QuotationPipe implements PipeTransform {
  constructor(private queryResource: QueryResourceService) {

  }

  transform(id: any):  Observable<Quotation[]> {

    return  this.queryResource.findAllQuotationsUsingGET({freightId:id});
  }
}
