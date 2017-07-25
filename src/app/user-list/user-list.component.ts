import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  userTable = {
    columns: [
      {
        title: 'name',
        sortable: true,
        key: 'username'
      },
      {
        title: 'email',
        sortable: true,
        key: 'email'
      },
      {
        title: 'domain',
        sortable: true,
        key: 'domain'
      }
    ]
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
  }

}
