import { AdminService } from './../../../services/admin.service';
import { User } from './../../../services/firebase/user.model';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/firebase/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criador-cadastro',
  templateUrl: './criador-cadastro.component.html',
  styleUrls: ['./criador-cadastro.component.css']
})
export class CriadorCadastroComponent implements OnInit {

  // user
  user: User;

  isSgnIn = false;

  // preview
  errorMessage: string = '';
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(
    public auth: AdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('usersAdmin') !== null) {
      this.isSgnIn = true;
      this.user = JSON.parse(localStorage.getItem('usersAdmin'));
      console.log(this.user);
    } else {
      this.isSgnIn = false;
    }


  }


  async onSignUp(email, password, displayName, photoURL) {
    await this.auth.singup(email, password, displayName, photoURL);
    if (this.auth.isLogIn) {
      this.isSgnIn = true;

      console.log(this.user);

      this.router.navigate(['/addserv']);
    }

  }

  preview(files) {

    // this.photoURL.reader = './../../../assets/img/UploadImagePnng@4x.png';

    if (files.length === 0) {
      return;
    }

    const ImgPreview = document.getElementById('imagePreview');
    ImgPreview.style.display = 'none';

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Apenas imagens aqui.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      localStorage.setItem('imgPath', this.imgURL);
    };
  }
}
