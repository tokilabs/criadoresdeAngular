import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Serv } from './../models/Service';
import { Observable, of } from 'rxjs';
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


  serv$: Observable<Serv>;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {
    this.serv$ = this.afAuth.authState.pipe(
      switchMap(serv => {
        if (serv) {
          return this.afs.doc<Serv>(`Servicos/${serv.uid}`).valueChanges();
        } else { return of(null); }
      })
    );
  }

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


  // FIRESTORE


  create_Serv(servico: Serv) {
    console.log(servico);
    return this.afs.collection('Servicos').add(servico.titulo);
  }

  read_Serv() {
    return this.afs.collection('Servicos').snapshotChanges();
  }

  update_Serv(servico: Serv) {
    this.afs.doc('Servicos/' + servico.titulo).update(servico);
  }

  delete_Serv(servico: Serv) {
    this.afs.doc('Servicos/' + servico.titulo).delete();
  }


}
