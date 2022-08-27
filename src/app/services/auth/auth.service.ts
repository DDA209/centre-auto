import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user-model';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string | null>;

  constructor(private afs: AngularFirestore, private afa: AngularFireAuth) {
    this.token = new BehaviorSubject<string | null>(null);
  }

  signUp(newUser: User): Promise<void> {
    return new Promise((res, rej) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((currentUser) => {
          this.token.next(currentUser.user!.refreshToken);
          if (currentUser.user?.uid) {
            newUser.id = currentUser.user?.uid;
            this.afs
              .collection('user')
              .doc(currentUser.user.uid)
              .set(newUser.toPlainObj())
              .then(() => res());
          }
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/email-already-exists':
              rej("L'adresse mail n'est pas sécurisée");
              break;

            case 'auth/invalid-email':
              rej("L'adresse email est invalide");
              break;

            case 'auth/weak-password':
              rej("Le mot de passe n'est pas sécurisé");
              break;

            case 'auth/operation-not-allowed':
            default:
              rej('Une erreur est survenue');
              break;
          }
        });
    });
  }

  signIn(email: string, password: string): Promise<void> {
    return new Promise((res, rej) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((currentUser) => {
          this.token.next(currentUser.user!.refreshToken);
          res();
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/invalid-email':
              rej("L'adresse email est invalide");
              break;

            case 'auth/user-disabled':
              rej('Le compte est désactivé');
              break;

            case 'auth/user-not-found':
              rej("L'utilisateur n'existe pas");
              break;

            case 'auth/wrong-password':
              rej('Le mot de passe est incorrect');
              break;

            default:
              rej('Une erreur est survenue');
              break;
          }
        });
    });
  }

  signout(): any {
    return new Promise((res): void => {
      firebase
        .auth()
        .signOut()
        .then((): void => {
          this.token.next(null);
        });
    });
  }

  getToken(): any {
    // When page is refreshed, refreshing token
    if (!this.token.getValue()) {
      this.afa.authState.subscribe((user: any): void => {
        if (user && user.uid) {
          this.token.next(user.refreshToken);
        }
      });
    }
    return this.token;
  }
}
