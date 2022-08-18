import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './main/history/history.component';
import { DressComponent } from './main/dress/dress.component';
import { LocationComponent } from './main/location/location.component';
import { ConfirmationComponent } from './main/confirmation/confirmation.component';
import { TempComponent } from './temp/temp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { IndexDialogComponent } from './main/index-dialog/index-dialog.component';
import { ConfirmationSuccessDialogComponent } from './main/confirmation-success-dialog/confirmation-success-dialog.component';
import { IndexComponent } from './main/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HistoryComponent,
    DressComponent,
    LocationComponent,
    ConfirmationComponent,
    TempComponent,
    IndexDialogComponent,
    ConfirmationSuccessDialogComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  exports: [
    TempComponent,
    IndexDialogComponent,
    MatDialogModule,
  ],
  providers: [
    HttpClient,

  ],
  entryComponents: [
    IndexDialogComponent,
    ConfirmationSuccessDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
