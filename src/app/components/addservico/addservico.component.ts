import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { AuthService } from './../../services/firebase/auth.service';
import { ServService } from './../../services/serv.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Serv } from './../../models/Service';
import * as firebase from 'firebase/app';
import { finalize } from 'rxjs/operators';


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

  fb;
  downUrl: Observable<string>;


  @Output() newServ: EventEmitter<Serv> = new EventEmitter();
  @Output() upServ: EventEmitter<Serv> = new EventEmitter();


  @Input() currentServ: Serv;
  @Input() isEdit: boolean;


  constructor(private servServ: ServService, public authS: AuthService, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {

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
