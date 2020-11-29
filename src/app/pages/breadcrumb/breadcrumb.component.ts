import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Agent } from '../../shared/models/agent';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() agent: Agent;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {}

  ngOnInit(): void {}

  public getCurrentDate(): string {
    return moment().format('ll');
  }
}
