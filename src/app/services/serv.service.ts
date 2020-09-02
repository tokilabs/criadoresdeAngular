import { Serv } from './../models/Service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ServService {

  servUrl: string = 'https://jsonplaceholder.typicode.com/Servs';

  constructor(private http: HttpClient) { }

  getServs(): Observable<Serv[]> {

    return this.http.get<Serv[]>(this.servUrl);
  }

  saveServ(serv: Serv): Observable<Serv> {
    return this.http.post<Serv>(this.servUrl, serv, httpOptions);
  }

  updateServ(serv: Serv): Observable<Serv> {
    const url = `${this.servUrl}/${serv.id}`;

    return this.http.put<Serv>(url, serv, httpOptions);
  }

  getServ(id: number): Observable<Serv> {
    const url = `${this.servUrl}/${id}`;

    return this.http.get<Serv>(url);
  }

  removeServ(serv: Serv | number): Observable<Serv> {
    const id = typeof serv === 'number' ? serv : serv.id;

    const url = `${this.servUrl}/${id}`;

    return this.http.delete<Serv>(url, httpOptions);
  }
}
