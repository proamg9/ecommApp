import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
  constructor(private auth: AuthenticationService,private router: Router) { }

  ngOnInit() {

  }
  login() {

    this.user.email=$('#email').val();
    this.user.password=$('#pass').val();
    console.log($('#email').val());
    this.auth.login(this.user).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/main');
    }, (err) => {
      console.error(err);
    });
  }
}
