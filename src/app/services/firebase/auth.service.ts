import { AngularFireStorage } from '@angular/fire/storage';
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
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;


  fb;
  downUrl: Observable<string>;


  constructor
    (
      public afAuth: AngularFireAuth,
      private storage: AngularFireStorage,
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


  }


  // AUTH USERS


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



  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }



  // AUTH ADMIN

  async getAdmFb(userAdm: User) {
    const firestore = firebase.firestore();
    const ref = firestore.collection('UserAdmins');
    const snapshot = await ref.get();
    console.log(snapshot.size);
    if (snapshot.size === 0) {
      alert("Nenhum Documento")
    } else {
      snapshot.forEach(doc => {
        if (doc.exists) {
          var docId = doc.id;
          var docData = doc.data();
          console.log(docData);
          console.log(docId);
        }
      });
    }
  }

  async googleSignInAdm() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserAdmData(credential.user);
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
    this.router.navigate(['/criador']);
    return userRef.set(data, { merge: true });

  }


  // AUTH SERV SERVICES

  updateServData({ uid, img, titulo, descricao, soft, preco, categoria, texto }: Serv) {
    // Sets user data to firestore on login
    uid = firebase.auth().currentUser.uid;
    const userRef: AngularFirestoreDocument<Serv> = this.afs.doc(`addserv/${titulo}`);

    const data = {
      uid, img, titulo, descricao, soft, preco, categoria, texto
    };

    alert("Serviço adicionado. Agradecemos!");

    return userRef.set(data, { merge: true });
  }


  upAvServData({ uid, img, titulo, descricao, soft, preco, categoria, texto }: Serv) {
    // Sets user data to firestore on login
    uid = firebase.auth().currentUser.uid;
    const userRef: AngularFirestoreDocument<Serv> = this.afs.doc(`audioVisual/${titulo}`);

    const data = {
      uid, img, titulo, descricao, soft, preco, categoria, texto
    };

    alert("Serviço adicionado. Agradecemos!");

    return userRef.set(data, { merge: true });
  }


  upContServData({ uid, img, titulo, descricao, soft, preco, categoria, texto }: Serv) {
    // Sets user data to firestore on login
    uid = firebase.auth().currentUser.uid;
    const userRef: AngularFirestoreDocument<Serv> = this.afs.doc(`conteudo/${titulo}`);

    const data = {
      uid, img, titulo, descricao, soft, preco, categoria, texto
    };

    alert("Serviço adicionado. Agradecemos!");

    return userRef.set(data, { merge: true });
  }


  upProgServData({ uid, img, titulo, descricao, soft, preco, categoria, texto }: Serv) {
    // Sets user data to firestore on login
    uid = firebase.auth().currentUser.uid;
    const userRef: AngularFirestoreDocument<Serv> = this.afs.doc(`programa/${titulo}`);

    const data = {
      uid, img, titulo, descricao, soft, preco, categoria, texto
    };

    alert("Serviço adicionado. Agradecemos!");

    return userRef.set(data, { merge: true });
  }



  saveStore(imagePath) {
    var n = Date.now();
    const file = imagePath[0];
    const filePath = `ServImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ServImages/${n}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downUrl = fileRef.getDownloadURL();
        this.downUrl.subscribe(url => {
          if (url) {
            this.fb = url;
          }
          console.log(this.fb);
          localStorage.setItem('imgPath', this.fb);
          // console.log(this.currentServ);
        });
      })
    ).subscribe(url => {
      if (url) { console.log(url); }
    });
  }
}






