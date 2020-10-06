import { ServTipo } from './../../../models/servtipo';
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
  servTipo: ServTipo;

  constructor(
    private servServ: ServService,
    public authS: AuthService,
    private storage: AngularFireStorage,
    private router: Router

  ) {


    this.serv = JSON.parse(localStorage.getItem('serv'));
    this.servTipo = JSON.parse(localStorage.getItem('servTipo'));

  }

  ngOnInit(): void {
    // this.serv = this.servServ.serv;


    console.log(this.servTipo);
  }

  addFire(serv: Serv) {
    console.log(serv);

    if (this.servTipo.isAudioV.is === true) {
      this.authS.upAvServData(serv);
      alert('Serviço Adicionado na Modalidae AudioVisual');
    }
    if (this.servTipo.isConteudo.is === true) {
      this.authS.upContServData(serv);
      alert('Serviço Adicionado na Modalidae Conteúdo');
    }
    if (this.servTipo.isProgram.is === true) {
      this.authS.upProgServData(serv);
      alert('Serviço Adicionado na Modalidae Programa');
    }
    this.authS.updateServData(serv); // UP to general addserv list

    this.router.navigate(['/pageservs']);

  }

  deleteServPrev() {
    if (confirm('Você quer mesmo fazer isso?')) {
      localStorage.removeItem('serv');
      window.location.reload();
    } else null;
  }

}
