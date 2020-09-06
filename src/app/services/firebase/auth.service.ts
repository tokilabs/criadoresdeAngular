import { Serv } from './../../models/Service';
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

  user$: Observable<User>;

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
    // console.log(this.user$);

  }


  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  updateUserData({ uid, email, displayName, photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      // password,
      displayName,
      photoURL,
    };
    this.router.navigate(['/addserv']);
    return userRef.set(data, { merge: true });

  }

  updateUserAdmData({ uid, email, displayName, photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`UserAdmins/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };
    this.router.navigate(['/addserv']);
    return userRef.set(data, { merge: true });

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  updateServData({ uid, titulo, descricao, soft, preco, categoria, texto }: Serv) {
    // Sets user data to firestore on login
    uid = firebase.auth().currentUser.uid;
    const userRef: AngularFirestoreDocument<Serv> = this.afs.doc(`addserv/${uid}`);

    const data = {
      uid, titulo, descricao, soft, preco, categoria, texto
    };
    return userRef.set(data, { merge: true });



  }





}
