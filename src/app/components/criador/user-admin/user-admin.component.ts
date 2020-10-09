import { UserAdmin } from './../../../models/UserAdmin';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css', './../../../../../node_modules/perfect-scrollbar/css/perfect-scrollbar.css', './../../../../assets/scss/material-dashboard.scss']
})
export class UserAdminComponent implements OnInit {

  adminUser: UserAdmin;

  key: string;
  keyOk: boolean;

  constructor() {
    this.key = '3xt5quWb6XdPP5ykvEHdMn2zS452';
    this.keyOk = false;

    this.adminUser = {
      uid: '',
      password: '',
      email: 'thiago@4coisas.house',
    };
  }

  ngOnInit(): void {
  }

  clickKey(keyPass): void {
    if (this.key === keyPass) {
      alert('Agora é só entrar em sua Conta ou se Cadastrar');
      this.keyOk = true;
    } else {
      alert('Ops... Parece que esta não é a chave para acesso');
      this.keyOk = false;

    }
  }
}
