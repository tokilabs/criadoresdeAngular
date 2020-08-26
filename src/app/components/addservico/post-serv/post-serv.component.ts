import { Serv } from './../../../models/Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-serv',
  templateUrl: './post-serv.component.html',
  styleUrls: ['./post-serv.component.css']
})
export class PostServComponent implements OnInit {

  serv: Serv;

  constructor() { }

  ngOnInit(): void {
  }

}
