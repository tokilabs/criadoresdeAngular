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

  constructor() {

    this.servTipo = {
      isAudioV: {
        is: false,
        logo: './../../../assets/svg/AudioVisualLogo.svg',
        banner: './../../../assets/svg/Avisualbanner.svg',
      },

      isProgram: {
        is: false,
        logo: './../../../assets/svg/programLogo.svg',
        banner: './../../../assets/svg/Programmingbanner.svg',
      },

      isConteudo: {
        is: false,
        logo: './../../../assets/svg/conteudoLogo.svg',
        banner: './../../../assets/svg/Containbanner.svg',
      },
    };
  }

  ngOnInit(): void {

    this.ImgSrc = this.servTipo.isAudioV.logo;
  }

}
