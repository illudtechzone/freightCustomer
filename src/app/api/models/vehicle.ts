/* tslint:disable */
import { Company } from './company';
import { VehicleDocument } from './vehicle-document';
import { VehicleStaff } from './vehicle-staff';
export interface Vehicle {
  company?: Company;
  currentLocationGeopoint?: string;
  id?: number;
  occupied?: boolean;
  registerNo?: string;
  vehicleDocuments?: Array<VehicleDocument>;
  vehicleLookupId?: number;
  vehicleStaffs?: Array<VehicleStaff>;
}
