import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { IndexDialogComponent } from '../index-dialog/index-dialog.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public user;

  constructor(
    private centralService: CentralService,
    public dialog: MatDialog,
  ) {
    this.centralService.user.subscribe((x) => {
      this.user = x;
    })
  }

  ngOnInit() {

    if (this.centralService.timesLoaded == 0) {

      const dialogConfig = new MatDialogConfig()

      dialogConfig.width = '350px';
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.minHeight = 400;
      dialogConfig.panelClass = 'custom-dialog-container';
      // dialogConfig.data = data;

      // let dialogRef = this.dialog.open(IndexDialogComponent, dialogConfig);

      // dialogRef.afterOpened().subscribe(
      //   (x) => {
      //     setTimeout(() => {
      //       dialogRef.close()
      //     }, 15000)
      //   }
      // )

      this.centralService.timesLoaded += 1;
    }
  }




}
