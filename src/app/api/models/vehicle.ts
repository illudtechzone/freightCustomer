/* tslint:disable */
import { Company } from './company';
import { Driver } from './driver';
export interface Vehicle {
  company?: Company;
  currentLocationGeopoint?: string;
  driver?: Driver;
  id?: number;
  occupied?: boolean;
  registerNo?: string;
  vehicleLookupId?: number;
}
