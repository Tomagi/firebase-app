import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _authService: AuthService;
  currentUser$: Observable<User>;

  constructor(private authService: AuthService) {
    this._authService = authService;
  }

  ngOnInit(): void {
    this.currentUser$ = this._authService.currentUser$;
  }

  public signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  public signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

  public signInWithApple() {
    this.authService.signInWithApple();
  }

  public signInWithAmazon() {
    this.authService.signInWithAmazon();
  }
  public signOut() {
    this.authService.signOut();
  }

}
