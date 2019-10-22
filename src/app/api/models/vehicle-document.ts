/* tslint:disable */
import { Vehicle } from './vehicle';
export interface VehicleDocument {
  document?: string;
  documentContentType?: string;
  documentType?: string;
  expiryDate?: string;
  id?: number;
  isExpired?: boolean;
  uploadTime?: string;
  validataionStartDate?: string;
  vehicle?: Vehicle;
}
