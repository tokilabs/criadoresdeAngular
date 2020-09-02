import { ServService } from './../../services/serv.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Serv } from './../../models/Service';


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

  @Output() newServ: EventEmitter<Serv> = new EventEmitter();
  @Output() upServ: EventEmitter<Serv> = new EventEmitter();


  @Input() currentServ: Serv;
  @Input() isEdit: boolean;


  constructor(private servServ: ServService) { }

  ngOnInit(): void {
  }

  addServ(img, titulo, descricao, soft, preco, categoria, texto) {

    if (!img || !titulo || !descricao || !soft || !preco || !categoria || !texto) {
      alert('Por Favor, adicione um Serviço.');
    } else {
      console.log(img, titulo, descricao, soft, preco, categoria, texto);
      this.servServ.saveServ
        ({
          id: 0,
          img: '',
          titulo: '',
          descricao: '',
          soft: '',
          preco: 0,
          categoria: '',
          texto: '',
        } as Serv).subscribe
        (serv => {
          this.newServ.emit(serv);
          console.log(serv);
        });
    }
  }

  updateServ(): void {
    this.servServ.updateServ
      (this.currentServ).subscribe
      (serv => {
        console.log(serv);
        this.isEdit = false;
        this.upServ.emit(serv);
      });
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
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      localStorage.setItem('imgPath', this.imgURL);
    };
  }


}
