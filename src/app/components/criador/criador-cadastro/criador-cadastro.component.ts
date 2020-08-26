import { Router } from '@angular/router';
import { AuthService } from './../../../services/firebase/auth.service';
import { UserAdmin } from './../../../models/UserAdmin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criador-cadastro',
  templateUrl: './criador-cadastro.component.html',
  styleUrls: ['./criador-cadastro.component.css']
})
export class CriadorCadastroComponent implements OnInit {


  userAdm: UserAdmin[];
  errorMessage: string = '';
  isSgnIn = false;

  constructor(
    public auth: AuthService,
    private router: Router, public fbAuth: AuthService,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('userAdm') !== null) {
      this.isSgnIn = true;
    } else {
      this.isSgnIn = false;
    }
    this.auth.getUsersAdm().subscribe(userAdm => {
      this.userAdm = userAdm;
    });

  }


  async onSignUp(email: string, password: string) {
    await this.fbAuth.singup(email, password);
    if (this.fbAuth.isLogIn) {
      this.isSgnIn = true;
    }
    this.router.navigate(['/addserv']);
  }

  generateId(userAdm: UserAdmin): number {
    for (let i = 0; i < this.userAdm.length; i++) {
      const usersAdm = this.userAdm.length[i];
      console.log(this.userAdm.length[i]);
      return this.userAdm.length[i].id = userAdm.id;

    }
  }
}
