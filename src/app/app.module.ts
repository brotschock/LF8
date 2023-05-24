import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularIbanModule } from 'angular-iban';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EinkaufComponent } from "./einkauf/einkauf.component";
import { GebaeudeplanerComponent } from "./gebaeudeplaner/gebaeudeplaner.component";
import { NewCustomerFormComponent } from './new-customer-form/new-customer-form.component';
import { ProjektleiterComponent } from "./projektleiter/projektleiter.component";
import { VertriebComponent } from "./vertrieb/vertrieb.component";
import { ProjectsComponent } from './projects/projects.component';
import { AddressComponent } from './address/address.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EinkaufComponent,
    ProjektleiterComponent,
    VertriebComponent,
    GebaeudeplanerComponent,
    NewCustomerFormComponent,
    ProjectsComponent,
    AddressComponent,
    CustomerTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularIbanModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
