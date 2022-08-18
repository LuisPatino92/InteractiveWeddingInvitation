import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  public timesLoaded: number = 0;

  private userSubject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly user: Observable<any> = this.userSubject.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    let phoneInLS = this.getWithExpiry('phone');
    if (phoneInLS) {
      this.checkUser(phoneInLS)
        .subscribe((x) => {
          this.router.navigate(['/historia'])
        })
    } else {
      this.router.navigate(['/'])
    }
  }

  public setCurrentUser(currentUser: any): void {
    this.userSubject.next(currentUser);
  }

  public checkUser(phone) {

    const payload = {
      phone: phone
    }

    return this.http.post<any>(`${environment.apiUrl}/getguest/`, payload)
      .pipe(map(x => {
        this.setCurrentUser(x);

        this.setWithExpiry('phone', phone, 60000);


      }))
  }

  public sendConfirmation(confirmation) {
    const payload = {
      confirmation: confirmation
    }

    return this.http.post<any>(`${environment.apiUrl}/confirm/`, payload)

  }

  private setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  private getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }
}
