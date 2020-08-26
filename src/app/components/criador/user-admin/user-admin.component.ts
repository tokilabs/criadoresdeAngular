import { UserAdmin } from './../../../models/UserAdmin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  adminUser: UserAdmin;

  constructor() {
    this.adminUser = {
      password: '',
      email: 'thiago@4coisas.house',
    };
  }

  ngOnInit(): void {
  }

}
