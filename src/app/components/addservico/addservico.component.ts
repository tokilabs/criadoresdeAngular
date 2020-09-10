import { ServTipo } from './../../models/servtipo';
import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { AuthService } from './../../services/firebase/auth.service';
import { ServService } from './../../services/serv.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Serv } from './../../models/Service';
import * as firebase from 'firebase/app';
import { finalize } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

interface servSelect {
  name: string;
  is: boolean;
}
@Component({
  selector: 'app-addservico',
  templateUrl: './addservico.component.html',
  styleUrls: ['./addservico.component.css']
})
export class AddservicoComponent implements OnInit {

  // imgURL = './../../../assets/img/UploadImagePnng@4x.png';
  public imagePath;
  imgURL: any;
  public message: string;

  isHidden = true;

  servTipo: ServTipo;


  servTipoControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  servSelects: servSelect[] = [
    { name: 'Programa', is: false },
    { name: 'AudioVisual', is: false },
    { name: 'Conteúdo', is: false },
  ];




  fb;
  downUrl: Observable<string>;


  @Output() newServ: EventEmitter<Serv> = new EventEmitter();
  @Output() upServ: EventEmitter<Serv> = new EventEmitter();


  @Input() currentServ: Serv;
  @Input() isEdit: boolean;


  constructor(private servServ: ServService, public authS: AuthService, private storage: AngularFireStorage) {

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


  }

  onServTip(servSelect) {


    console.log(this.servSelects);
    console.log(this.servTipoControl.value.name);
    console.log(this.servTipoControl.value.is);
    console.log(servSelect);
    console.log('#######   ANTES   ##########');


    for (let i = 0; i < this.servSelects.length; i++) {
      // console.log(this.servSelects[i]);
      if (this.servTipoControl.value.name === this.servSelects[i].name) {
        // console.log(this.servTipoControl.value);

        this.servTipoControl.value.is = true;
        this.servSelects[i].is = true;

        console.log(servSelect);
        console.log(this.servTipoControl.value.name);
        console.log(this.servTipoControl.value.is);
        console.log(this.servSelects);
        console.log('########   DEPOIS   #########');
      } else {
        this.servTipoControl.value.is = false;
        this.servSelects[i].is = false;
      }
    }



  }



  addServ(img, titulo, descricao, soft, preco, categoria, texto) {

    if (!img || !titulo || !descricao || !soft || !preco || !categoria || !texto) {
      alert('Por Favor, adicione um Serviço.');
    } else {
      img = this.fb;
      console.log(img);
      console.log(img, titulo, descricao, soft, preco, categoria, texto);
      this.servServ.saveServ
        ({
          img, titulo, descricao, soft, preco, categoria, texto
        } as Serv);
      this.isHidden = false;
    }
  }



  preview(files): void {

    // this.imgURL.reader = './../../../assets/img/UploadImagePnng@4x.png';

    if (files.length === 0) {
      return;
    }

    var ImgPreview = document.getElementById('imagePreview');
    ImgPreview.style.display = 'none';

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Apenas imagens aqui.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;

    reader.readAsDataURL(files[0]);
    localStorage.setItem('files', JSON.stringify(files));
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.imagePath = files;


      this.authS.saveStore(this.imagePath);


    };
  }


}
