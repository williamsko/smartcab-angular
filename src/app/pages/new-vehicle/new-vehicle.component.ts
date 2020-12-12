import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Agent } from '../../shared/models/agent';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.scss'],
})
export class NewVehicleComponent implements OnInit {
  form: FormGroup;

  shouldDisplayErrorMessage = false;
  errorMessage: string;
  agent: Agent;
  title: string;
  subtitle: string;

  statusClient = true;
  statusCarteCarburant = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.agent = ObjectUtility.getAgentInformation();
    this.title = 'Formalité';
    this.subtitle = 'Enrégistrer un nouveau taxi';
  }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.onSelectTypeClient();
    this.onSelectStatutCarteCarburant();
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      statutClient: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      numeroPiece: ['', Validators.required],
      dateDelivrancePiece: ['', Validators.required],
      dateExpirationPiece: ['', Validators.required],
      codeAssurance: [''],
      dureeAssurance: [''],
      dateExpirationAssurance: ['', Validators.required],
      statutCarteCarburant: ['', Validators.required],
      numeroCarteCarburant: [''],
      codeCarteCarburant: [''],
      montantDotationCarburant: ['', Validators.required],
      dateDelivranceCarteCarburant: [''],
    });
  }

  private onSelectTypeClient(): void {
    this.form.get('statutClient').valueChanges.subscribe((value) => {
      if (value === 'PROSPECT') {
        this.statusClient = false;
      }else{
        this.statusClient = true;
      }
    });
  }

  private onSelectStatutCarteCarburant(): void {
    this.form.get('statutCarteCarburant').valueChanges.subscribe((value) => {
      if (value === 'PAS_ENCORE') {
        this.statusCarteCarburant = false;
      }else{
        this.statusCarteCarburant = true;
      }
    });
  }
}
