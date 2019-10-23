/* tslint:disable */
import { Driver } from './driver';
export interface DriverDocument {
  document?: string;
  documentContentType?: string;
  documentType?: string;
  driver?: Driver;
  expiryDate?: string;
  id?: number;
  isExpired?: boolean;
  uploadTime?: string;
  validataionStartDate?: string;
}
