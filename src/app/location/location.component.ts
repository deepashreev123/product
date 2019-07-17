import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LocationComponent implements OnInit {

  location: string;

  constructor(private router: Router, private locationService : LocationService, public dialogRef: MatDialogRef<LocationComponent>) {

  }

  ngOnInit() { }


  onNoClick(location) {
    // console.log(location);

    // console.log("*************")

    sessionStorage.setItem("location", location);

    console.log("set location : " + location);
    this.dialogRef.close();


  }
}
