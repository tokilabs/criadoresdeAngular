import { async } from '@angular/core/testing';
import { UserAdmin } from './../../../models/UserAdmin';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criador-entrar',
  templateUrl: './criador-entrar.component.html',
  styleUrls: ['./criador-entrar.component.css']
})
export class CriadorEntrarComponent implements OnInit {

  userAdm: UserAdmin;
  errorMessage: string = '';
  isSgnIn = false;

  constructor(
    public auth: AuthService,
    private router: Router, public fbAuth: AuthService,
  ) {
    this.userAdm = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    if (localStorage.getItem('userAdm') !== null) {
      this.isSgnIn = true;
    } else {
      this.isSgnIn = false;
    }


  }



  async onSingin(email: string, password: string) {
    await this.fbAuth.singin(email, password);
    if (this.fbAuth.isLogIn) {
      this.isSgnIn = true;
    }
  }


}
