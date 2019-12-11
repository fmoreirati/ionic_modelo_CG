import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (!this.afAuth.auth.currentUser) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
