import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  imageSrc: string;
  title: string;
  softused: string;
  detailused: string;
  servcatg: string;
  price: number;
  boxtext: string;


  constructor() { }

  ngOnInit(): void {
  }

}
