import { AuthService } from './firebase/auth.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAdmin } from './../models/UserAdmin';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  isLogIn = false;

  users: UserAdmin[];
  userAdmin$: Observable<UserAdmin>;
  private userSource = new BehaviorSubject<UserAdmin>({ email: null, password: null });
  selectedUser = this.userSource.asObservable();

  private stateUser = new BehaviorSubject<boolean>(true);
  stateClear = this.stateUser.asObservable();

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
    public authS: AuthService,
  ) {
    this.users = [];
    this.userAdmin$ = this.afAuth.authState.pipe(
      switchMap(userAdmin => {
        if (userAdmin) {
          return this.afs.doc<UserAdmin>(`UserAdmins/${userAdmin.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
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
      // this.read_UserAdmins();
      console.log(res.user.uid);

      console.log(this.userAdmin$);


      return this.authS.updateUserData({ uid: res.user.uid, email, displayName: firstName, photoURL });

    });
    alert('Agora Você é um Criador, aproveite.');
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
    console.log(this.users);
    return of(this.users.sort((a, b) => {
      return b.id = a.id;
    }));
  }

  addUser(userAdmin: UserAdmin) {
    this.users.unshift(userAdmin);

    // Add to local storage
    localStorage.setItem('usersAdmin', JSON.stringify(this.users));

    console.log(this.users);
    // return this.updtUserAdmin(userAdmin);
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

    console.log(this.users);
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
