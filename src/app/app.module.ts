import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthSigninComponent } from './pages/auth-signin/auth-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RecouvrementComponent } from './pages/recouvrement/recouvrement.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { HistoriqueTransactionComponent } from './pages/historique-transaction/historique-transaction.component';
import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { NewVehicleComponent } from './pages/new-vehicle/new-vehicle.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { RecouvrementAssuranceComponent } from './pages/recouvrement/types-recouvrements/recouvrement-assurance/recouvrement-assurance.component';
import { RecouvrementCarburantComponent } from './pages/recouvrement/types-recouvrements/recouvrement-carburant/recouvrement-carburant.component';
import { RecouvrementRizComponent } from './pages/recouvrement/types-recouvrements/recouvrement-riz/recouvrement-riz.component';
import { RecouvrementTerrainComponent } from './pages/recouvrement/types-recouvrements/recouvrement-terrain/recouvrement-terrain.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthSigninComponent,
    HomeComponent,
    RecouvrementComponent,
    MenubarComponent,
    ReceiptComponent,
    HistoriqueTransactionComponent,
    TopMenuComponent,
    NewVehicleComponent,
    BreadcrumbComponent,
    RecouvrementAssuranceComponent,
    RecouvrementCarburantComponent,
    RecouvrementRizComponent,
    RecouvrementTerrainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
