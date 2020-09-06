import { PageServComponent } from './../../addservico/page-serv/page-serv.component';
import { Observable } from 'rxjs';
import { Serv } from './../../../models/Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadaserv',
  templateUrl: './cadaserv.component.html',
  styleUrls: ['./cadaserv.component.css']
})
export class CadaservComponent implements OnInit {

  titulo: 'ca';
  img: '';
  soft: '';
  descricao: '';
  constructor() {

  }

  ngOnInit(): void {


  }

}
