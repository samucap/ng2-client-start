import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login (e) {
    let formItems = e['target']['form']['elements']

    this.authService.login(`username=${formItems['md-input-1']['value']}&password=${formItems['md-input-3']['value']}`)
  }

}
