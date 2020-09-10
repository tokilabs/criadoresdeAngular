import { Observable } from 'rxjs';
import { ServService } from './../../../services/serv.service';
import { Serv } from './../../../models/Service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-serv',
  templateUrl: './post-serv.component.html',
  styleUrls: ['./post-serv.component.css']
})
export class PostServComponent implements OnInit {

  serv: Serv;

  titulo;
  constructor(private servServ: ServService, private route: ActivatedRoute) {

    // this.titulo = 'jair';

  }

  ngOnInit(): void {
    // this.serv.titulo = +this.route.snapshot.paramMap.get('titulo');
    // this.servServ.fireServ(titulo => { this.serv.titulo = titulo });
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    // this.servServ.fireServ(this.titulo, this.serv).then((serv): Serv => this.serv);
    this.servServ.fbGet(this.titulo).subscribe(serv => this.serv = serv);
    console.log(this.titulo);
    console.log(this.serv);
  }


}
