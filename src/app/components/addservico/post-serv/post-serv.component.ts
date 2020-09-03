import { ServService } from './../../../services/serv.service';
import { Serv } from './../../../models/Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-serv',
  templateUrl: './post-serv.component.html',
  styleUrls: ['./post-serv.component.css']
})
export class PostServComponent implements OnInit {

  servs: Serv[];
  currentServ: Serv = {
    id: 0,
    img: '',
    titulo: '',
    descricao: '',
    soft: '',
    preco: 0,
    categoria: '',
    texto: '',
  };

  isEdit = false;

  constructor(private servServ: ServService) { }

  ngOnInit(): void {
    this.servServ.getServs().subscribe(servs => {
      this.servs = servs;
      console.log(servs);
    });
  }

  onNewServ(serv: Serv) {
    this.servs.unshift(serv);
  }

  onUpdatedServ(serv: Serv) {
    this.servs.forEach((cur, index) => {
      if (serv.id === cur.id) {
        this.servs.splice(index, 1);
        this.servs.unshift(serv);
        this.isEdit = false;
        this.currentServ = {
          id: 0,
          img: '',
          titulo: '',
          descricao: '',
          soft: '',
          preco: 0,
          categoria: '',
          texto: '',
        };
      }
    });
  }

  editPost(serv: Serv) {
    this.currentServ = serv;
    this.isEdit = true;
  }


}
