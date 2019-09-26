/* tslint:disable */
import { Vehicle } from './vehicle';
export interface Company {
  address?: string;
  companyIdpCode?: string;
  email?: string;
  id?: number;
  locationAddress?: string;
  locationGeopoint?: string;
  name?: string;
  phoneNumber?: number;
  vehicles?: Array<Vehicle>;
}
