/* tslint:disable */
import { Driver } from './driver';
import { Staff } from './staff';
import { Vehicle } from './vehicle';
export interface Company {
  locationAddress?: string;
  address?: string;
  drivers?: Array<Driver>;
  email?: string;
  id?: number;
  companyIdpCode?: string;
  locationGeopoint?: string;
  name?: string;
  phoneNumber?: number;
  staffs?: Array<Staff>;
  vehicles?: Array<Vehicle>;
}
