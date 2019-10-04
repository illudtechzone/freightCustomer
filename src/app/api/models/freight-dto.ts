/* tslint:disable */
export interface FreightDTO {
  id?: number;
  acceptedStatus?: 'START' | 'COMPLETE' | 'NOT_STARTED';
  createdTime?: string;
  customerId?: number;
  deliveryDate?: string;
  destinationAddress?: string;
  destinationGeopoint?: string;
  destinationPlaceId?: string;
  destionationTime?: string;
  distance?: number;
  estimatedAmount?: number;
  fragile?: boolean;
  height?: number;
  companyId?: number;
  length?: number;
  originalAmount?: number;
  pickupAddress?: string;
  pickupGeopoint?: string;
  pickupPlaceId?: string;
  requestedStatus?: 'REQUEST' | 'CONFIRM' | 'REJECT';
  startTime?: string;
  trackingId?: string;
  type?: string;
  vehicleId?: number;
  weight?: number;
  width?: number;
}
