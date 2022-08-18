import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationSuccessDialogComponent } from '../confirmation-success-dialog/confirmation-success-dialog.component';
import { IndexDialogComponent } from '../index-dialog/index-dialog.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public user;
  public confirmationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private centralService: CentralService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit() {
    this.centralService.user.subscribe(
      (x) => {
        this.user = x;
        this.confirmationForm = this.fb.group({
          id: [this.user.id],
          name: [this.user.name],
          confirmed: [this.user.confirmed],
          companions: this.fb.array([])
        });

        for (let companion of x.companions) {
          this.addCompanionForm(companion);
        }
      }
    );


  }

  get companions() {
    return this.confirmationForm.controls["companions"] as FormArray;
  }

  private addCompanionForm(companion) {
    const companionForm = this.fb.group({
      id: [companion.id],
      name: [companion.name],
      confirmed: [companion.confirmed]
    });

    this.companions.push(companionForm);
  }

  public submitConfirmation() {
    this.centralService.sendConfirmation(this.confirmationForm.value).subscribe(
      (x) => {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.width = '350px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.minHeight = 400;
        dialogConfig.panelClass = 'custom-dialog-container';


        let dialogRef = this.dialog.open(IndexDialogComponent, dialogConfig);
        dialogRef.afterOpened().subscribe(
          (_) => {
            setTimeout(() => {
              dialogRef.close();
              localStorage.removeItem('phone')
              window.location.reload();
            }, 10000);

          });
      }
    );
  }

}
