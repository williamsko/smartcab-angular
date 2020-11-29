import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { DataService } from '../../services/data.service';
import { TransactionService } from '../../services/transaction.service';
import { Agent } from '../../shared/models/agent';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-recouvrement',
  templateUrl: './recouvrement.component.html',
  styleUrls: ['./recouvrement.component.scss'],
})
export class RecouvrementComponent implements OnInit {
  searchAccountForm: FormGroup;
  recouvrementForm: FormGroup;

  agent: Agent;

  shouldDisplayErrorMessage = false;
  errorMessage: string;
  phoneNumber: string;

  searchResult = false;

  firstName: string;
  lastName: string;
  address: string;

  title: string;
  subtitle: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private transactionService: TransactionService,
    private dataService: DataService
  ) {
    this.agent = ObjectUtility.getAgentInformation();
    this.title = 'Transaction';
    this.subtitle = 'Recouvrement';
  }

  ngOnInit(): void {
    this.searchAccountForm = this.createSearchAccountForm();
    this.onSearchField();
  }

  private onSearchField(): void {
    this.searchAccountForm
      .get('phoneNumber')
      .valueChanges.subscribe((value) => {
        this.recouvrementForm = undefined;
      });
  }
  private createSearchAccountForm(): FormGroup {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required],
    });
  }

  private createRecouvrementForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  private fillRecouvrementForm(data: any): void {
    this.firstName = data.customer.first_name;
    this.lastName = data.customer.last_name;
    this.address = data.address;

    this.recouvrementForm.get('address').patchValue(data.address);
    this.recouvrementForm.get('firstName').patchValue(data.customer.first_name);
    this.recouvrementForm.get('lastName').patchValue(data.customer.last_name);
  }

  public searchAccount(): void {
    this.phoneNumber = this.searchAccountForm.get('phoneNumber').value;
    if (this.phoneNumber) {
      this.accountService.getCustomerInformation(this.phoneNumber).subscribe(
        (data) => {
          this.recouvrementForm = this.createRecouvrementForm();
          this.fillRecouvrementForm(data);
          this.shouldDisplayErrorMessage = false;
          this.searchResult = true;
        },
        (err) => {
          this.shouldDisplayErrorMessage = true;
          this.errorMessage = 'Véhicule introuvable';
          this.searchResult = false;
        }
      );
    }
  }

  public dismissAlert(): void {
    this.shouldDisplayErrorMessage = false;
  }

  public doRecouvrement(): void {
    const amount = this.recouvrementForm.get('amount').value;

    this.transactionService.recouvrement(this.phoneNumber, amount).subscribe(
      (result) => {
        this.dataService.data = result;
        this.builCustomerData();
        console.log(this.dataService.data);
        this.router.navigate(['receipt']);
      },
      (err) => {
        this.shouldDisplayErrorMessage = true;
        this.errorMessage = err.error.response_text;
      }
    );
  }

  private builCustomerData(): void {
    this.dataService.customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phoneNumber,
      address: this.address,
    };
  }
}
