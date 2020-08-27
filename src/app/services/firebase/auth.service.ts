import { UserAdmin } from './../../models/UserAdmin';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogIn = false;

  user$: Observable<User>;
  userAdmin$: Observable<UserAdmin>;

  criadores: UserAdmin[];

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }

      })
    );
    this.userAdmin$ = this.afAuth.authState.pipe(
      switchMap(userAdmin => {
        if (userAdmin) {
          return this.afs.doc<UserAdmin>(`usersAdmin/${userAdmin.email}`).valueChanges();
        } else {
          return of(null);
        }

      })
    );
    this.criadores = [];
  }

  getUsersAdm(): Observable<UserAdmin[]> {
    if (localStorage.getItem('userAdm') === null) {
      this.criadores = [];
    } else {
      this.criadores = JSON.parse(localStorage.getItem('userAdm'));
    }

    return of(this.criadores.sort((a, b) => { return b.id = a.id; }));
  }

  async singin(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLogIn = true;
      localStorage.setItem('userAdm', JSON.stringify(res.user));
    });
    this.router.navigate(['/addserv']);
  }
  async singup(email, password) {
    await this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLogIn = true;
      localStorage.setItem('userAdm', JSON.stringify(res.user));
    });

    // this.router.navigate(['/addserv']);
    alert('Agora Você é um Criador, aproveite.');
    this.router.navigate(['/addserv']);
    return this.updateUserAdminData({ email, password });


  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };
    this.router.navigate(['/addserv']);
    return userRef.set(data, { merge: true });

  }
  private updateUserAdminData({ email, password }: UserAdmin) {
    // Sets user data to firestore on login

    this.criadores[email] = email;
    this.criadores[password] = password;
    console.log(email);
    const userRef: AngularFirestoreDocument<UserAdmin> = this.afs.doc(`userAdm/${email}`);

    const dataAdm = {
      email,
      password,
    };
    console.log(dataAdm);

    return userRef.set(dataAdm, { merge: true });

    // return this.afs.collection('userAdm').add(this.userAdmin$);

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }





}
