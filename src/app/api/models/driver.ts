/* tslint:disable */
import { Company } from './company';
import { DriverDocument } from './driver-document';
export interface Driver {
  company?: Company;
  driverDocuments?: Array<DriverDocument>;
  driverIdpCode?: string;
  email?: string;
  id?: number;
  name?: string;
  phoneNumber?: number;
}
