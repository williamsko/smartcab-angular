import { Injectable } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { ObjectUtility } from '../shared/utils/object.utility';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any;
  customer: Customer;

  constructor() {}

  public reset(): void {
    this.data = undefined;
    this.customer = undefined;
    ObjectUtility.removeAgentInformation();
  }
}
