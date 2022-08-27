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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';

// import * as firebase from '@angular/fire/app';
import firebase from 'firebase/compat/app';
import { BrandEditorViewComponent } from './views/brand/brand-editor-view/brand-editor-view.component';
import { BrandCreatorViewComponent } from './views/brand/brand-creator-view/brand-creator-view.component';
import { BrandsViewComponent } from './views/brand/brands-view/brands-view.component';
import { ModalConfirmDeleteComponent } from './components/modal/modal-confirm-delete/modal-confirm-delete.component';
import { BrandService } from './services/brand/brand.service';

firebase.initializeApp(environment.firebaseConfig);

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
    BrandEditorViewComponent,
    BrandCreatorViewComponent,
    BrandsViewComponent,
    ModalConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AngularFireAuthGuard, BrandService],
  bootstrap: [AppComponent],
})
export class AppModule {}
