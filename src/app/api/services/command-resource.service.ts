/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompanyDTO } from '../models/company-dto';
import { CustomerDTO } from '../models/customer-dto';
import { DriverDTO } from '../models/driver-dto';
import { FreightDTO } from '../models/freight-dto';
import { VehicleDTO } from '../models/vehicle-dto';
import { VehicleLookUpDTO } from '../models/vehicle-look-up-dto';
import { CustomerStatus } from '../models/customer-status';
import { QuotationDTO } from '../models/quotation-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createCompanyUsingPOSTPath = '/api/command/create/company';
  static readonly createcompanyIfnotExistUsingPOSTPath = '/api/command/create/company/ifnotexist';
  static readonly createCustomerUsingPOSTPath = '/api/command/create/customer';
  static readonly createcustomerIfnotExistUsingPOSTPath = '/api/command/create/customer/ifnotexist';
  static readonly createDriverUsingPOSTPath = '/api/command/create/driver';
  static readonly createdriverIfnotExistUsingPOSTPath = '/api/command/create/driver/ifnotexist';
  static readonly createFreightUsingPOSTPath = '/api/command/create/freight';
  static readonly createVehicleUsingPOSTPath = '/api/command/create/vehicle';
  static readonly createVehicleLookUpUsingPOSTPath = '/api/command/create/vehiclelookup';
  static readonly customerStatusUsingPOSTPath = '/api/command/customer/status/{taskId}';
  static readonly sendQuatationUsingPOSTPath = '/api/command/sendQuatation/{taskId}';
  static readonly updateCompanyUsingPUTPath = '/api/command/update/company';
  static readonly updateCustomerUsingPUTPath = '/api/command/update/customer';
  static readonly updateDriverUsingPUTPath = '/api/command/update/driver';
  static readonly updateFreightUsingPUTPath = '/api/command/update/freight';
  static readonly updateVehicleUsingPUTPath = '/api/command/update/vehicle';
  static readonly updateVehicleLookUpUsingPUTPath = '/api/command/update/vehiclelookup';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param company company
   * @return OK
   */
  createCompanyUsingPOSTResponse(company: CompanyDTO): __Observable<__StrictHttpResponse<CompanyDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = company;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyDTO>;
      })
    );
  }
  /**
   * @param company company
   * @return OK
   */
  createCompanyUsingPOST(company: CompanyDTO): __Observable<CompanyDTO> {
    return this.createCompanyUsingPOSTResponse(company).pipe(
      __map(_r => _r.body as CompanyDTO)
    );
  }

  /**
   * @param companyDTO companyDTO
   * @return OK
   */
  createcompanyIfnotExistUsingPOSTResponse(companyDTO: CompanyDTO): __Observable<__StrictHttpResponse<CompanyDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = companyDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/company/ifnotexist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyDTO>;
      })
    );
  }
  /**
   * @param companyDTO companyDTO
   * @return OK
   */
  createcompanyIfnotExistUsingPOST(companyDTO: CompanyDTO): __Observable<CompanyDTO> {
    return this.createcompanyIfnotExistUsingPOSTResponse(companyDTO).pipe(
      __map(_r => _r.body as CompanyDTO)
    );
  }

  /**
   * @param customer customer
   * @return OK
   */
  createCustomerUsingPOSTResponse(customer: CustomerDTO): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param customer customer
   * @return OK
   */
  createCustomerUsingPOST(customer: CustomerDTO): __Observable<CustomerDTO> {
    return this.createCustomerUsingPOSTResponse(customer).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param customerDTO customerDTO
   * @return OK
   */
  createcustomerIfnotExistUsingPOSTResponse(customerDTO: CustomerDTO): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customerDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/customer/ifnotexist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param customerDTO customerDTO
   * @return OK
   */
  createcustomerIfnotExistUsingPOST(customerDTO: CustomerDTO): __Observable<CustomerDTO> {
    return this.createcustomerIfnotExistUsingPOSTResponse(customerDTO).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param driver driver
   * @return OK
   */
  createDriverUsingPOSTResponse(driver: DriverDTO): __Observable<__StrictHttpResponse<DriverDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = driver;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/driver`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DriverDTO>;
      })
    );
  }
  /**
   * @param driver driver
   * @return OK
   */
  createDriverUsingPOST(driver: DriverDTO): __Observable<DriverDTO> {
    return this.createDriverUsingPOSTResponse(driver).pipe(
      __map(_r => _r.body as DriverDTO)
    );
  }

  /**
   * @param driverDTO driverDTO
   * @return OK
   */
  createdriverIfnotExistUsingPOSTResponse(driverDTO: DriverDTO): __Observable<__StrictHttpResponse<DriverDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = driverDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/driver/ifnotexist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DriverDTO>;
      })
    );
  }
  /**
   * @param driverDTO driverDTO
   * @return OK
   */
  createdriverIfnotExistUsingPOST(driverDTO: DriverDTO): __Observable<DriverDTO> {
    return this.createdriverIfnotExistUsingPOSTResponse(driverDTO).pipe(
      __map(_r => _r.body as DriverDTO)
    );
  }

  /**
   * @param freight freight
   * @return OK
   */
  createFreightUsingPOSTResponse(freight: FreightDTO): __Observable<__StrictHttpResponse<FreightDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = freight;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/freight`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FreightDTO>;
      })
    );
  }
  /**
   * @param freight freight
   * @return OK
   */
  createFreightUsingPOST(freight: FreightDTO): __Observable<FreightDTO> {
    return this.createFreightUsingPOSTResponse(freight).pipe(
      __map(_r => _r.body as FreightDTO)
    );
  }

  /**
   * @param vehicle vehicle
   * @return OK
   */
  createVehicleUsingPOSTResponse(vehicle: VehicleDTO): __Observable<__StrictHttpResponse<VehicleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicle;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/vehicle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VehicleDTO>;
      })
    );
  }
  /**
   * @param vehicle vehicle
   * @return OK
   */
  createVehicleUsingPOST(vehicle: VehicleDTO): __Observable<VehicleDTO> {
    return this.createVehicleUsingPOSTResponse(vehicle).pipe(
      __map(_r => _r.body as VehicleDTO)
    );
  }

  /**
   * @param vehicleLookUp vehicleLookUp
   * @return OK
   */
  createVehicleLookUpUsingPOSTResponse(vehicleLookUp: VehicleLookUpDTO): __Observable<__StrictHttpResponse<VehicleLookUpDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicleLookUp;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/vehiclelookup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VehicleLookUpDTO>;
      })
    );
  }
  /**
   * @param vehicleLookUp vehicleLookUp
   * @return OK
   */
  createVehicleLookUpUsingPOST(vehicleLookUp: VehicleLookUpDTO): __Observable<VehicleLookUpDTO> {
    return this.createVehicleLookUpUsingPOSTResponse(vehicleLookUp).pipe(
      __map(_r => _r.body as VehicleLookUpDTO)
    );
  }

  /**
   * @param params The `CommandResourceService.CustomerStatusUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `customerStatus`: customerStatus
   */
  customerStatusUsingPOSTResponse(params: CommandResourceService.CustomerStatusUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.customerStatus;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/customer/status/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CustomerStatusUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `customerStatus`: customerStatus
   */
  customerStatusUsingPOST(params: CommandResourceService.CustomerStatusUsingPOSTParams): __Observable<null> {
    return this.customerStatusUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.SendQuatationUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `response`: response
   */
  sendQuatationUsingPOSTResponse(params: CommandResourceService.SendQuatationUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.response;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/sendQuatation/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.SendQuatationUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `response`: response
   */
  sendQuatationUsingPOST(params: CommandResourceService.SendQuatationUsingPOSTParams): __Observable<null> {
    return this.sendQuatationUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param company company
   * @return OK
   */
  updateCompanyUsingPUTResponse(company: CompanyDTO): __Observable<__StrictHttpResponse<CompanyDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = company;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyDTO>;
      })
    );
  }
  /**
   * @param company company
   * @return OK
   */
  updateCompanyUsingPUT(company: CompanyDTO): __Observable<CompanyDTO> {
    return this.updateCompanyUsingPUTResponse(company).pipe(
      __map(_r => _r.body as CompanyDTO)
    );
  }

  /**
   * @param customer customer
   * @return OK
   */
  updateCustomerUsingPUTResponse(customer: CustomerDTO): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customer;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param customer customer
   * @return OK
   */
  updateCustomerUsingPUT(customer: CustomerDTO): __Observable<CustomerDTO> {
    return this.updateCustomerUsingPUTResponse(customer).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param driver driver
   * @return OK
   */
  updateDriverUsingPUTResponse(driver: DriverDTO): __Observable<__StrictHttpResponse<DriverDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = driver;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/driver`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DriverDTO>;
      })
    );
  }
  /**
   * @param driver driver
   * @return OK
   */
  updateDriverUsingPUT(driver: DriverDTO): __Observable<DriverDTO> {
    return this.updateDriverUsingPUTResponse(driver).pipe(
      __map(_r => _r.body as DriverDTO)
    );
  }

  /**
   * @param freight freight
   * @return OK
   */
  updateFreightUsingPUTResponse(freight: FreightDTO): __Observable<__StrictHttpResponse<FreightDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = freight;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/freight`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FreightDTO>;
      })
    );
  }
  /**
   * @param freight freight
   * @return OK
   */
  updateFreightUsingPUT(freight: FreightDTO): __Observable<FreightDTO> {
    return this.updateFreightUsingPUTResponse(freight).pipe(
      __map(_r => _r.body as FreightDTO)
    );
  }

  /**
   * @param vehicle vehicle
   * @return OK
   */
  updateVehicleUsingPUTResponse(vehicle: VehicleDTO): __Observable<__StrictHttpResponse<VehicleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicle;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/vehicle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VehicleDTO>;
      })
    );
  }
  /**
   * @param vehicle vehicle
   * @return OK
   */
  updateVehicleUsingPUT(vehicle: VehicleDTO): __Observable<VehicleDTO> {
    return this.updateVehicleUsingPUTResponse(vehicle).pipe(
      __map(_r => _r.body as VehicleDTO)
    );
  }

  /**
   * @param vehicleLookUp vehicleLookUp
   * @return OK
   */
  updateVehicleLookUpUsingPUTResponse(vehicleLookUp: VehicleLookUpDTO): __Observable<__StrictHttpResponse<VehicleLookUpDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicleLookUp;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update/vehiclelookup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VehicleLookUpDTO>;
      })
    );
  }
  /**
   * @param vehicleLookUp vehicleLookUp
   * @return OK
   */
  updateVehicleLookUpUsingPUT(vehicleLookUp: VehicleLookUpDTO): __Observable<VehicleLookUpDTO> {
    return this.updateVehicleLookUpUsingPUTResponse(vehicleLookUp).pipe(
      __map(_r => _r.body as VehicleLookUpDTO)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for customerStatusUsingPOST
   */
  export interface CustomerStatusUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * customerStatus
     */
    customerStatus: CustomerStatus;
  }

  /**
   * Parameters for sendQuatationUsingPOST
   */
  export interface SendQuatationUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * response
     */
    response: QuotationDTO;
  }
}

export { CommandResourceService }
