import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedSource = new BehaviorSubject<boolean>(false);
  authenticated$: Observable<boolean> = this.authenticatedSource.asObservable();

  constructor() { }

  logOn(): void {
    this.authenticatedSource.next(true);
  }

  logOff(): void {
    this.authenticatedSource.next(false);
  }
}
