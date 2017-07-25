import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currUser
  routes = [
    { path: '', title: 'Dashboard' },
    { path: 'users', title: 'Users' }
  ]

  constructor() { }

  ngOnInit() {
    console.log('curr', this)
  }

}
