/* tslint:disable */
import { Vehicle } from './vehicle';
export interface VehicleStaff {
  id?: number;
  priority?: number;
  staffId?: number;
  type?: 'DRIVER' | 'STAFF';
  vehicle?: Vehicle;
}
