/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { Driver } from '../models/driver';
import { VehicleLookUp } from '../models/vehicle-look-up';
import { FreightDTO } from '../models/freight-dto';
import { Quotation } from '../models/quotation';
import { Vehicle } from '../models/vehicle';
import { DataResponse } from '../models/data-response';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findCompanyByIdUsingGETPath = '/api/findCompanybyId/{id}';
  static readonly findCustomerByIdUsingGETPath = '/api/findCustomerbyId/{id}';
  static readonly findDriverByIdUsingGETPath = '/api/findDriverbyId/{id}';
  static readonly findVehicleLookUpByIdUsingGETPath = '/api/findVehiclelookupId/{id}';
  static readonly findAllFreightsByCustomerIdUsingGETPath = '/api/freights/{customerId}';
  static readonly findAllFreightsUsingGETPath = '/api/getAllFreight/{requestedStatus}';
  static readonly findAllQuotationsUsingGETPath = '/api/getAllQuotations/{freightId}';
  static readonly findAllQuotationsByCompanyIdAndFreightIdUsingGETPath = '/api/getAllQuotationsby/{companyId}/{freightId}';
  static readonly findAllvehiclesUsingGETPath = '/api/getAllvehicles/{companyIdpCode}';
  static readonly getBookingDetailsUsingGETPath = '/api/getBookingDetails/{processInstanceId}';
  static readonly getPendingFreightsUsingGETPath = '/api/getPendingFreights';
  static readonly searchCompanyIDPCodeUsingGETPath = '/api/getcompany/{companyIdpCode}';
  static readonly searchCustomerIDPCodeUsingGETPath = '/api/getcustomer/{customerIdpCode}';
  static readonly searchDriverIDPCodeUsingGETPath = '/api/getdriver/{driverIdpCode}';
  static readonly getTasksUsingGETPath = '/api/tasks';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id id
   * @return OK
   */
  findCompanyByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Company>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findCompanybyId/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Company>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findCompanyByIdUsingGET(id: number): __Observable<Company> {
    return this.findCompanyByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Company)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findCustomerByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findCustomerbyId/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findCustomerByIdUsingGET(id: number): __Observable<Customer> {
    return this.findCustomerByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findDriverByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Driver>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findDriverbyId/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Driver>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findDriverByIdUsingGET(id: number): __Observable<Driver> {
    return this.findDriverByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Driver)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findVehicleLookUpByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<VehicleLookUp>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findVehiclelookupId/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VehicleLookUp>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findVehicleLookUpByIdUsingGET(id: number): __Observable<VehicleLookUp> {
    return this.findVehicleLookUpByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as VehicleLookUp)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllFreightsByCustomerIdUsingGETParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllFreightsByCustomerIdUsingGETResponse(params: QueryResourceService.FindAllFreightsByCustomerIdUsingGETParams): __Observable<__StrictHttpResponse<Array<FreightDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/freights/${params.customerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FreightDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllFreightsByCustomerIdUsingGETParams` containing the following parameters:
   *
   * - `customerId`: customerId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllFreightsByCustomerIdUsingGET(params: QueryResourceService.FindAllFreightsByCustomerIdUsingGETParams): __Observable<Array<FreightDTO>> {
    return this.findAllFreightsByCustomerIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<FreightDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllFreightsUsingGETParams` containing the following parameters:
   *
   * - `requestedStatus`: requestedStatus
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllFreightsUsingGETResponse(params: QueryResourceService.FindAllFreightsUsingGETParams): __Observable<__StrictHttpResponse<Array<FreightDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getAllFreight/${params.requestedStatus}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FreightDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllFreightsUsingGETParams` containing the following parameters:
   *
   * - `requestedStatus`: requestedStatus
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllFreightsUsingGET(params: QueryResourceService.FindAllFreightsUsingGETParams): __Observable<Array<FreightDTO>> {
    return this.findAllFreightsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<FreightDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllQuotationsUsingGETParams` containing the following parameters:
   *
   * - `freightId`: freightId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQuotationsUsingGETResponse(params: QueryResourceService.FindAllQuotationsUsingGETParams): __Observable<__StrictHttpResponse<Array<Quotation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getAllQuotations/${params.freightId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Quotation>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllQuotationsUsingGETParams` containing the following parameters:
   *
   * - `freightId`: freightId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQuotationsUsingGET(params: QueryResourceService.FindAllQuotationsUsingGETParams): __Observable<Array<Quotation>> {
    return this.findAllQuotationsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Quotation>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllQuotationsByCompanyIdAndFreightIdUsingGETParams` containing the following parameters:
   *
   * - `freightId`: freightId
   *
   * - `companyId`: companyId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQuotationsByCompanyIdAndFreightIdUsingGETResponse(params: QueryResourceService.FindAllQuotationsByCompanyIdAndFreightIdUsingGETParams): __Observable<__StrictHttpResponse<Array<Quotation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getAllQuotationsby/${params.companyId}/${params.freightId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Quotation>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllQuotationsByCompanyIdAndFreightIdUsingGETParams` containing the following parameters:
   *
   * - `freightId`: freightId
   *
   * - `companyId`: companyId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQuotationsByCompanyIdAndFreightIdUsingGET(params: QueryResourceService.FindAllQuotationsByCompanyIdAndFreightIdUsingGETParams): __Observable<Array<Quotation>> {
    return this.findAllQuotationsByCompanyIdAndFreightIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Quotation>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllvehiclesUsingGETParams` containing the following parameters:
   *
   * - `companyIdpCode`: companyIdpCode
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllvehiclesUsingGETResponse(params: QueryResourceService.FindAllvehiclesUsingGETParams): __Observable<__StrictHttpResponse<Array<Vehicle>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getAllvehicles/${params.companyIdpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vehicle>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllvehiclesUsingGETParams` containing the following parameters:
   *
   * - `companyIdpCode`: companyIdpCode
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllvehiclesUsingGET(params: QueryResourceService.FindAllvehiclesUsingGETParams): __Observable<Array<Vehicle>> {
    return this.findAllvehiclesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Vehicle>)
    );
  }

  /**
   * @param processInstanceId processInstanceId
   * @return OK
   */
  getBookingDetailsUsingGETResponse(processInstanceId: string): __Observable<__StrictHttpResponse<FreightDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getBookingDetails/${processInstanceId}`,
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
   * @param processInstanceId processInstanceId
   * @return OK
   */
  getBookingDetailsUsingGET(processInstanceId: string): __Observable<FreightDTO> {
    return this.getBookingDetailsUsingGETResponse(processInstanceId).pipe(
      __map(_r => _r.body as FreightDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetPendingFreightsUsingGETParams` containing the following parameters:
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * @return OK
   */
  getPendingFreightsUsingGETResponse(params: QueryResourceService.GetPendingFreightsUsingGETParams): __Observable<__StrictHttpResponse<Array<FreightDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.processInstanceId != null) __params = __params.set('processInstanceId', params.processInstanceId.toString());
    if (params.processDefinitionKey != null) __params = __params.set('processDefinitionKey', params.processDefinitionKey.toString());
    if (params.processDefinitionId != null) __params = __params.set('processDefinitionId', params.processDefinitionId.toString());
    if (params.nameLike != null) __params = __params.set('nameLike', params.nameLike.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.createdOn != null) __params = __params.set('createdOn', params.createdOn.toString());
    if (params.createdBefore != null) __params = __params.set('createdBefore', params.createdBefore.toString());
    if (params.createdAfter != null) __params = __params.set('createdAfter', params.createdAfter.toString());
    if (params.candidateUser != null) __params = __params.set('candidateUser', params.candidateUser.toString());
    if (params.candidateGroups != null) __params = __params.set('candidateGroups', params.candidateGroups.toString());
    if (params.candidateGroup != null) __params = __params.set('candidateGroup', params.candidateGroup.toString());
    if (params.assigneeLike != null) __params = __params.set('assigneeLike', params.assigneeLike.toString());
    if (params.assignee != null) __params = __params.set('assignee', params.assignee.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getPendingFreights`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FreightDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetPendingFreightsUsingGETParams` containing the following parameters:
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * @return OK
   */
  getPendingFreightsUsingGET(params: QueryResourceService.GetPendingFreightsUsingGETParams): __Observable<Array<FreightDTO>> {
    return this.getPendingFreightsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<FreightDTO>)
    );
  }

  /**
   * @param companyIdpCode companyIdpCode
   * @return OK
   */
  searchCompanyIDPCodeUsingGETResponse(companyIdpCode: string): __Observable<__StrictHttpResponse<Company>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getcompany/${companyIdpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Company>;
      })
    );
  }
  /**
   * @param companyIdpCode companyIdpCode
   * @return OK
   */
  searchCompanyIDPCodeUsingGET(companyIdpCode: string): __Observable<Company> {
    return this.searchCompanyIDPCodeUsingGETResponse(companyIdpCode).pipe(
      __map(_r => _r.body as Company)
    );
  }

  /**
   * @param customerIdpCode customerIdpCode
   * @return OK
   */
  searchCustomerIDPCodeUsingGETResponse(customerIdpCode: string): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getcustomer/${customerIdpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param customerIdpCode customerIdpCode
   * @return OK
   */
  searchCustomerIDPCodeUsingGET(customerIdpCode: string): __Observable<Customer> {
    return this.searchCustomerIDPCodeUsingGETResponse(customerIdpCode).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param driverIdpCode driverIdpCode
   * @return OK
   */
  searchDriverIDPCodeUsingGETResponse(driverIdpCode: string): __Observable<__StrictHttpResponse<Driver>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/getdriver/${driverIdpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Driver>;
      })
    );
  }
  /**
   * @param driverIdpCode driverIdpCode
   * @return OK
   */
  searchDriverIDPCodeUsingGET(driverIdpCode: string): __Observable<Driver> {
    return this.searchDriverIDPCodeUsingGETResponse(driverIdpCode).pipe(
      __map(_r => _r.body as Driver)
    );
  }

  /**
   * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
   *
   * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
   *
   * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
   *
   * - `unassigned`: unassigned
   *
   * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
   *
   * - `tenantId`: Only return tasks with the given tenantId.
   *
   * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
   *
   * - `taskDefinitionKey`: taskDefinitionKey
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
   *
   * - `processInstanceBusinessKey`: processInstanceBusinessKey
   *
   * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
   *
   * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
   *
   * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `priority`: priority
   *
   * - `ownerLike`: ownerLike
   *
   * - `owner`: owner
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `minimumPriority`: minimumPriority
   *
   * - `maximumPriority`: maximumPriority
   *
   * - `involvedUser`: involvedUser
   *
   * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
   *
   * - `includeProcessVariables`: Indication to include process variables in the result.
   *
   * - `executionId`: Only return tasks which are part of the execution with the given id.
   *
   * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
   *
   * - `dueOn`: Only return tasks which are due on the given date.
   *
   * - `dueBefore`: Only return tasks which are due before the given date.
   *
   * - `dueAfter`: Only return tasks which are due after the given date.
   *
   * - `description`: description
   *
   * - `delegationState`: delegationState
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
   *
   * @return OK
   */
  getTasksUsingGETResponse(params: QueryResourceService.GetTasksUsingGETParams): __Observable<__StrictHttpResponse<DataResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.withoutTenantId != null) __params = __params.set('withoutTenantId', params.withoutTenantId.toString());
    if (params.withoutDueDate != null) __params = __params.set('withoutDueDate', params.withoutDueDate.toString());
    if (params.unassigned != null) __params = __params.set('unassigned', params.unassigned.toString());
    if (params.tenantIdLike != null) __params = __params.set('tenantIdLike', params.tenantIdLike.toString());
    if (params.tenantId != null) __params = __params.set('tenantId', params.tenantId.toString());
    if (params.taskDefinitionKeyLike != null) __params = __params.set('taskDefinitionKeyLike', params.taskDefinitionKeyLike.toString());
    if (params.taskDefinitionKey != null) __params = __params.set('taskDefinitionKey', params.taskDefinitionKey.toString());
    if (params.processInstanceId != null) __params = __params.set('processInstanceId', params.processInstanceId.toString());
    if (params.processInstanceBusinessKeyLike != null) __params = __params.set('processInstanceBusinessKeyLike', params.processInstanceBusinessKeyLike.toString());
    if (params.processInstanceBusinessKey != null) __params = __params.set('processInstanceBusinessKey', params.processInstanceBusinessKey.toString());
    if (params.processDefinitionNameLike != null) __params = __params.set('processDefinitionNameLike', params.processDefinitionNameLike.toString());
    if (params.processDefinitionName != null) __params = __params.set('processDefinitionName', params.processDefinitionName.toString());
    if (params.processDefinitionKeyLike != null) __params = __params.set('processDefinitionKeyLike', params.processDefinitionKeyLike.toString());
    if (params.processDefinitionKey != null) __params = __params.set('processDefinitionKey', params.processDefinitionKey.toString());
    if (params.processDefinitionId != null) __params = __params.set('processDefinitionId', params.processDefinitionId.toString());
    if (params.priority != null) __params = __params.set('priority', params.priority.toString());
    if (params.ownerLike != null) __params = __params.set('ownerLike', params.ownerLike.toString());
    if (params.owner != null) __params = __params.set('owner', params.owner.toString());
    if (params.nameLike != null) __params = __params.set('nameLike', params.nameLike.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.minimumPriority != null) __params = __params.set('minimumPriority', params.minimumPriority.toString());
    if (params.maximumPriority != null) __params = __params.set('maximumPriority', params.maximumPriority.toString());
    if (params.involvedUser != null) __params = __params.set('involvedUser', params.involvedUser.toString());
    if (params.includeTaskLocalVariables != null) __params = __params.set('includeTaskLocalVariables', params.includeTaskLocalVariables.toString());
    if (params.includeProcessVariables != null) __params = __params.set('includeProcessVariables', params.includeProcessVariables.toString());
    if (params.executionId != null) __params = __params.set('executionId', params.executionId.toString());
    if (params.excludeSubTasks != null) __params = __params.set('excludeSubTasks', params.excludeSubTasks.toString());
    if (params.dueOn != null) __params = __params.set('dueOn', params.dueOn.toString());
    if (params.dueBefore != null) __params = __params.set('dueBefore', params.dueBefore.toString());
    if (params.dueAfter != null) __params = __params.set('dueAfter', params.dueAfter.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.delegationState != null) __params = __params.set('delegationState', params.delegationState.toString());
    if (params.createdOn != null) __params = __params.set('createdOn', params.createdOn.toString());
    if (params.createdBefore != null) __params = __params.set('createdBefore', params.createdBefore.toString());
    if (params.createdAfter != null) __params = __params.set('createdAfter', params.createdAfter.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    if (params.candidateUser != null) __params = __params.set('candidateUser', params.candidateUser.toString());
    if (params.candidateOrAssigned != null) __params = __params.set('candidateOrAssigned', params.candidateOrAssigned.toString());
    if (params.candidateGroups != null) __params = __params.set('candidateGroups', params.candidateGroups.toString());
    if (params.candidateGroup != null) __params = __params.set('candidateGroup', params.candidateGroup.toString());
    if (params.assigneeLike != null) __params = __params.set('assigneeLike', params.assigneeLike.toString());
    if (params.assignee != null) __params = __params.set('assignee', params.assignee.toString());
    if (params.active != null) __params = __params.set('active', params.active.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataResponse>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
   *
   * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
   *
   * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
   *
   * - `unassigned`: unassigned
   *
   * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
   *
   * - `tenantId`: Only return tasks with the given tenantId.
   *
   * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
   *
   * - `taskDefinitionKey`: taskDefinitionKey
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
   *
   * - `processInstanceBusinessKey`: processInstanceBusinessKey
   *
   * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
   *
   * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
   *
   * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `priority`: priority
   *
   * - `ownerLike`: ownerLike
   *
   * - `owner`: owner
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `minimumPriority`: minimumPriority
   *
   * - `maximumPriority`: maximumPriority
   *
   * - `involvedUser`: involvedUser
   *
   * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
   *
   * - `includeProcessVariables`: Indication to include process variables in the result.
   *
   * - `executionId`: Only return tasks which are part of the execution with the given id.
   *
   * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
   *
   * - `dueOn`: Only return tasks which are due on the given date.
   *
   * - `dueBefore`: Only return tasks which are due before the given date.
   *
   * - `dueAfter`: Only return tasks which are due after the given date.
   *
   * - `description`: description
   *
   * - `delegationState`: delegationState
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
   *
   * @return OK
   */
  getTasksUsingGET(params: QueryResourceService.GetTasksUsingGETParams): __Observable<DataResponse> {
    return this.getTasksUsingGETResponse(params).pipe(
      __map(_r => _r.body as DataResponse)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findAllFreightsByCustomerIdUsingGET
   */
  export interface FindAllFreightsByCustomerIdUsingGETParams {

    /**
     * customerId
     */
    customerId: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllFreightsUsingGET
   */
  export interface FindAllFreightsUsingGETParams {

    /**
     * requestedStatus
     */
    requestedStatus: 'REQUEST' | 'CONFIRM' | 'REJECT';

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllQuotationsUsingGET
   */
  export interface FindAllQuotationsUsingGETParams {

    /**
     * freightId
     */
    freightId: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllQuotationsByCompanyIdAndFreightIdUsingGET
   */
  export interface FindAllQuotationsByCompanyIdAndFreightIdUsingGETParams {

    /**
     * freightId
     */
    freightId: number;

    /**
     * companyId
     */
    companyId: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllvehiclesUsingGET
   */
  export interface FindAllvehiclesUsingGETParams {

    /**
     * companyIdpCode
     */
    companyIdpCode: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getPendingFreightsUsingGET
   */
  export interface GetPendingFreightsUsingGETParams {

    /**
     * processInstanceId
     */
    processInstanceId?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given key.
     */
    processDefinitionKey?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given id.
     */
    processDefinitionId?: string;

    /**
     * nameLike
     */
    nameLike?: string;

    /**
     * name
     */
    name?: string;

    /**
     * Only return tasks which are created on the given date.
     */
    createdOn?: string;

    /**
     * Only return tasks which are created before the given date.
     */
    createdBefore?: string;

    /**
     * Only return tasks which are created after the given date.
     */
    createdAfter?: string;

    /**
     * candidateUser
     */
    candidateUser?: string;

    /**
     * candidateGroups
     */
    candidateGroups?: string;

    /**
     * candidateGroup
     */
    candidateGroup?: string;

    /**
     * assigneeLike
     */
    assigneeLike?: string;

    /**
     * assignee
     */
    assignee?: string;
  }

  /**
   * Parameters for getTasksUsingGET
   */
  export interface GetTasksUsingGETParams {

    /**
     * If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
     */
    withoutTenantId?: boolean;

    /**
     * Only return tasks which don�t have a due date. The property is ignored if the value is false.
     */
    withoutDueDate?: boolean;

    /**
     * unassigned
     */
    unassigned?: string;

    /**
     * Only return tasks with a tenantId like the given value.
     */
    tenantIdLike?: string;

    /**
     * Only return tasks with the given tenantId.
     */
    tenantId?: string;

    /**
     * taskDefinitionKeyLike
     */
    taskDefinitionKeyLike?: string;

    /**
     * taskDefinitionKey
     */
    taskDefinitionKey?: string;

    /**
     * processInstanceId
     */
    processInstanceId?: string;

    /**
     * processInstanceBusinessKeyLike
     */
    processInstanceBusinessKeyLike?: string;

    /**
     * processInstanceBusinessKey
     */
    processInstanceBusinessKey?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with a name like the given value.
     */
    processDefinitionNameLike?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given name.
     */
    processDefinitionName?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with a key like the given value.
     */
    processDefinitionKeyLike?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given key.
     */
    processDefinitionKey?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given id.
     */
    processDefinitionId?: string;

    /**
     * priority
     */
    priority?: string;

    /**
     * ownerLike
     */
    ownerLike?: string;

    /**
     * owner
     */
    owner?: string;

    /**
     * nameLike
     */
    nameLike?: string;

    /**
     * name
     */
    name?: string;

    /**
     * minimumPriority
     */
    minimumPriority?: string;

    /**
     * maximumPriority
     */
    maximumPriority?: string;

    /**
     * involvedUser
     */
    involvedUser?: string;

    /**
     * Indication to include task local variables in the result.
     */
    includeTaskLocalVariables?: boolean;

    /**
     * Indication to include process variables in the result.
     */
    includeProcessVariables?: boolean;

    /**
     * Only return tasks which are part of the execution with the given id.
     */
    executionId?: string;

    /**
     * Only return tasks that are not a subtask of another task.
     */
    excludeSubTasks?: boolean;

    /**
     * Only return tasks which are due on the given date.
     */
    dueOn?: string;

    /**
     * Only return tasks which are due before the given date.
     */
    dueBefore?: string;

    /**
     * Only return tasks which are due after the given date.
     */
    dueAfter?: string;

    /**
     * description
     */
    description?: string;

    /**
     * delegationState
     */
    delegationState?: string;

    /**
     * Only return tasks which are created on the given date.
     */
    createdOn?: string;

    /**
     * Only return tasks which are created before the given date.
     */
    createdBefore?: string;

    /**
     * Only return tasks which are created after the given date.
     */
    createdAfter?: string;

    /**
     * Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
     */
    category?: string;

    /**
     * candidateUser
     */
    candidateUser?: string;

    /**
     * Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
     */
    candidateOrAssigned?: string;

    /**
     * candidateGroups
     */
    candidateGroups?: string;

    /**
     * candidateGroup
     */
    candidateGroup?: string;

    /**
     * assigneeLike
     */
    assigneeLike?: string;

    /**
     * assignee
     */
    assignee?: string;

    /**
     * If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
     */
    active?: boolean;
  }
}

export { QueryResourceService }
