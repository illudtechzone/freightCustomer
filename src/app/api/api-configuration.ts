/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.232.29.128:8086';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
