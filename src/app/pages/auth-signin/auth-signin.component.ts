import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoginService } from '../../services/login.service';
import { Agent, Entity } from '../../shared/models/agent';
import { ObjectUtility } from '../../shared/utils/object.utility';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSigninComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  shouldDisplayErrorMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public signin(): void {
    if (!this.form.valid) {
      this.errorMessage = 'Vous devez remplir tous les champs';
      this.shouldDisplayErrorMessage = true;
    } else {
      this.shouldDisplayErrorMessage = false;

      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.callLogin(username, password);
    }
  }

  public dismissAlert(): void {
    this.shouldDisplayErrorMessage = false;
  }

  private callLogin(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(
      (data) => {
        const tentity: Entity = {
          accountNumber: data.entity.account_number,
          address: data.entity.address,
          email: data.entity.email,
          phoneNumber: data.entity.phone_number,
          brandName: data.entity.brand_name,
        };

        const agent: Agent = {
          address: data.address,
          code: data.code,
          phoneNumber: data.phone_number,
          token: data.token,
          habilitation: data.habilitation,
          authenticationType: data.authenticationType,
          entity: tentity,
        };
        ObjectUtility.storeAgentInformation(agent);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.shouldDisplayErrorMessage = true;
        this.errorMessage =
          'Vous identifiants sont incorrects. Bien vouloir réessayer !';
      }
    );
  }
}
