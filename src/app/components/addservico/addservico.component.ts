import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  preview(files) {

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
    }
  }


}
