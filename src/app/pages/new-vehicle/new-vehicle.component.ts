import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Agent } from '../../shared/models/agent';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.scss'],
})
export class NewVehicleComponent implements OnInit {
  shouldDisplayErrorMessage = false;
  errorMessage: string;
  agent: Agent;
  title: string;
  subtitle: string;

  constructor(private dataService: DataService) {
    this.agent = ObjectUtility.getAgentInformation();
    this.title = 'Opération';
    this.subtitle = 'Enrégistrer un nouveau client';
  }

  ngOnInit(): void {}
}
