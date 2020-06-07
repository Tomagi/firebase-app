import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

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

  public signOut() {
    this.authService.signOut();
  }
}
