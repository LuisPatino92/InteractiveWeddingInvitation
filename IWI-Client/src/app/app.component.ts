import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentralService } from './services/central.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IWI-Client';

  public logged: boolean = false;
  public user;

  constructor(
    private centralService: CentralService,
    private router: Router,
  ) {
    this.centralService.user.subscribe(
      (x) => {
        if (Object.keys(x).length > 0) {
          this.logged = true;
          this.user = x;
          this.router.navigate(['/historia'])
        }
      }
    )

  }

}
