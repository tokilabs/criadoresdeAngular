import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css', './../../index/index.component.css']
})
export class ContatoComponent implements OnInit {

  img = "https://cdn.shopify.com/s/files/1/0303/7725/t/2/assets/clio-emt-speaker.png?245932330282961812";

  center = [-43.18545154, -22.92244951];
  zoom = 17;
  layersData: null;
  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: 'Foo',
          iconSize: [60, 60],
        },
        geometry: {
          type: 'Point',
          coordinates: [-43.18545154, -22.92244951],
        },
      },
    ],
  };

  alert(message: string) {
    alert(message);
  }
  constructor(
    private http: HttpClient,
    private route: Router,
  ) {

  }

  ngOnInit(): void {

  }

}
