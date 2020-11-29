import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthSigninComponent } from './pages/auth-signin/auth-signin.component';
import { HomeComponent } from './pages/home/home.component';
import { RecouvrementComponent } from './pages/recouvrement/recouvrement.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { HistoriqueTransactionComponent } from './pages/historique-transaction/historique-transaction.component';
import { NewVehicleComponent } from './pages/new-vehicle/new-vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: AuthSigninComponent,
        children: [{ path: '', redirectTo: 'signin', pathMatch: 'full' }],
      },
      { path: 'home', component: HomeComponent },
      { path: 'recouvrement', component: RecouvrementComponent },
      { path: 'receipt', component: ReceiptComponent },
      { path: 'history', component: HistoriqueTransactionComponent },
      { path: 'new-vehicle', component: NewVehicleComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
