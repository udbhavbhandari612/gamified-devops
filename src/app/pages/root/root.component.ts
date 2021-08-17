import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  expanded: boolean = true

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }

  isLinkActive(url: string) {
    return this.router.url === url
  }



}
