import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAdmin } from './../models/UserAdmin';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  isLogIn = false;

  users: UserAdmin[];
  private userSource = new BehaviorSubject<UserAdmin>({ email: null, password: null });
  selectedUser = this.userSource.asObservable();

  private stateUser = new BehaviorSubject<boolean>(true);
  stateClear = this.stateUser.asObservable();

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
  ) {
    this.users = [];
  }

  // Firebase

  // AUTH MAIL
  async singin(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLogIn = true;
      this.addUser({ email, password });
      // localStorage.setItem('userAdm', JSON.stringify(res.user));
    });
    this.router.navigate(['/addserv']);
  }

  async singup(email, password, firstName, photoURL) {
    await this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLogIn = true;
      localStorage.setItem('userAdm', JSON.stringify(res.user));
      this.addUser({ email, password, firstName, photoURL });
      this.create_NewUserAdmin({ email, password });
      console.log(this.userSource);
    });
    alert('Agora Você é um Criador, aproveite.');
    // this.router.navigate(['/addserv']);
  }

  // FIRESTORE

  /* create_NewUserAdmin : Cria um novo registro na coleção especificada usando o método add */
  create_NewUserAdmin(record) {
    return this.afs.collection('UserAdmins').add(record);
  }
  /*read_UserAdmin: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_UserAdmins() {
    return this.afs.collection('UserAdmins').snapshotChanges();
  }
  /*update_UserAdmin : atualiza o registro pegando o ID e chamando o método de atualização */
  update_UserAdmin(recordID, record) {
    this.afs.doc('UserAdmins/' + recordID).update(record);
  }
  /*delete_UserAdmin : chama o método de exclusão  ao registrar o ID*/
  delete_UserAdmin(record_id) {
    this.afs.doc('UserAdmins/' + record_id).delete();
  }



  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }



  // LocalStorage


  getUsers(): Observable<UserAdmin[]> {

    if (localStorage.getItem('usersAdmin') === null) {
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('usersAdmin'));
    }

    return of(this.users.sort((a, b) => {
      return b.id = a.id;
    }));
  }

  addUser(userAdmin: UserAdmin) {
    this.users.unshift(userAdmin);

    // Add to local storage
    localStorage.setItem('usersAdmin', JSON.stringify(this.users));
  }

  updateUser(userAdmin: UserAdmin) {
    this.users.forEach((cur, index) => {
      if (userAdmin.id === cur.id) {
        this.users.splice(index, 1);
      }
    });
    this.users.unshift(userAdmin);

    // Update to local storage
    localStorage.setItem('usersAdmin', JSON.stringify(this.users));
  }

  deleteUser(userAdmin: UserAdmin) {
    this.users.forEach((cur, index) => {
      if (userAdmin.id === cur.id) {
        this.users.splice(index, 1);
      }
    });

    // delete from local storage
    localStorage.setItem('usersAdmin', JSON.stringify(this.users));
  }

  clearState() {
    this.stateUser.next(true);
  }
}
