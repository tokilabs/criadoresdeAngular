import { Router, RouterModule, RouterState } from '@angular/router';
import { ServTipo } from './../../models/servtipo';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-serv-bar',
  templateUrl: './serv-bar.component.html',
  styleUrls: ['./serv-bar.component.css']
})
export class ServBarComponent implements OnInit {

  servTipo: ServTipo;

  ImgSrc: any;

  constructor(
    public router: Router,
  ) {

    this.servTipo = {
      isAudioV: {
        name: 'AudioVisual',
        is: false,
        logo: 'assets/svg/AudioVisualLogo.svg',
        banner: 'assets/svg/Avisualbanner.svg',
      },

      isProgram: {
        name: 'Programa',
        is: false,
        logo: 'assets/svg/programLogo.svg',
        banner: 'assets/svg/Programmingbanner.svg',
      },

      isConteudo: {
        name: 'Conteúdo',
        is: false,
        logo: 'assets/svg/conteudoLogo.svg',
        banner: 'assets/svg/Containbanner.svg',
      },
    };
  }

  ngOnInit(): void {

    if (this.router.url === '/audiovisual') {
      this.ImgSrc = this.servTipo.isAudioV.logo;
    }
    if (this.router.url === '/programa') {
      this.ImgSrc = this.servTipo.isProgram.logo;
    }
    if (this.router.url === '/conteudo') {
      this.ImgSrc = this.servTipo.isConteudo.logo;
    }

  }

}
