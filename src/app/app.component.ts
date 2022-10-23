import {Component, OnInit} from '@angular/core';
import { TokenStorageServiceService } from './Auth/_services/TokenStorageService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | undefined;  budget: string | undefined;
  title = "mini-project";
  constructor(private tokenStorageService: TokenStorageServiceService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.budget = user.budget;

    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
