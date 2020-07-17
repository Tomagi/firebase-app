import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'tg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public connectedUser;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(user => {
      this.connectedUser = user;
    });
  }

}
