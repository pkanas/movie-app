import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.email === 'admin@gmail.com' && this.password === 'abc123') {
      this.router.navigate(['/movies']);
    } else {
      alert('please enter valid credetials!');
    }
  }


}
