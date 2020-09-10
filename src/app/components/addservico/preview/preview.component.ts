import { Router } from '@angular/router';
import { Serv } from './../../../models/Service';
import { AuthService } from './../../../services/firebase/auth.service';
import { ServService } from './../../../services/serv.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  serv: Serv;

  constructor(
    private servServ: ServService,
    public authS: AuthService,
    private storage: AngularFireStorage,
    private router: Router

  ) {


    this.serv = JSON.parse(localStorage.getItem('serv'));


  }

  ngOnInit(): void {
    // this.serv = this.servServ.serv;
  }

  addFire(serv: Serv) {
    console.log(serv);


    this.authS.updateServData(serv);
    this.router.navigate(['/pageservs']);

  }

  deleteServPrev() {
    if (confirm('Você quer mesmo fazer isso?')) {
      localStorage.removeItem('serv');
      window.location.reload();
    } else null;
  }

}
