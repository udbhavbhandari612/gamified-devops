import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbServiceService } from 'src/app/services/db/db-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: any[] = []
  constructor(
    private db: DbServiceService,
    private userService: UserServiceService,
    private router: Router
  ) {
    document.title = "Login | Gamified DevOps"
    if (this.userService.getCurrentuser())
      router.navigateByUrl('/home')
  }

  ngOnInit(): void {
    this.users = this.db.getUsers();

  }

  login(user: string) {
    this.userService.login(user)
    this.router.navigateByUrl('/home')

  }

}
