import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SignBaseViewComponent } from './views/sign-base-view/sign-base-view.component';
import { SigninViewComponent } from './views/signin-view/signin-view.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth/';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { AuthService } from './auth.service';

// import * as firebase from '@angular/fire/app';

// firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeViewComponent,
    SigninViewComponent,
    SigninFormComponent,
    SignupFormComponent,
    SignBaseViewComponent,
    DashboardViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AngularFireAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
