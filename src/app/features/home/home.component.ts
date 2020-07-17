import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
