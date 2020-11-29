import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { Agent } from '../../shared/models/agent';
import { Customer } from '../../shared/models/customer';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  data: any;
  customer: Customer;
  agent: Agent;

  constructor(private dataService: DataService) {}

  getReceiptData(): void {
    this.data = this.dataService.data;
  }

  getCustomerData(): void {
    this.customer = this.dataService.customer;
  }

  getAgentData(): void {
    this.agent = ObjectUtility.getAgentInformation();
  }

  buildRecouvrementReceipt(): void {}

  ngOnInit(): void {
    this.getReceiptData();
    this.getCustomerData();
    this.getAgentData();
  }

  public getCurrentDate(): string {
    return moment().format('MMM Do YY');
  }
}
