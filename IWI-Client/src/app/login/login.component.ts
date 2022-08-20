import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentralService } from '../services/central.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;

  public authorizedPhones = ['350'];

  constructor(
    private fb: FormBuilder,
    private centralService: CentralService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      phone: [''],

    });
  }

  public login() {
    let rawPhone = this.loginForm.controls.phone.value;

    rawPhone = rawPhone.split(' ').join('');

    this.centralService.checkUser(rawPhone).subscribe((x) => {

      this.router.navigate(['/inicio']);
    }

    );
  }

}
