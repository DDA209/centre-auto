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
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ModelsViewComponent } from './views/model/models-view/models-view.component';
import { ModelEditorViewComponent } from './views/model/model-editor-view/model-editor-view.component';
import { ModelCreatorViewComponent } from './views/model/model-creator-view/model-creator-view.component';
import { BrandEditorViewComponent } from './views/brand/brand-editor-view/brand-editor-view.component';
import { BrandCreatorViewComponent } from './views/brand/brand-creator-view/brand-creator-view.component';
import { BrandsViewComponent } from './views/brand/brands-view/brands-view.component';

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
import { BrandService } from './services/brand/brand.service';
import { ModelService } from './services/model/model.service';

// import * as firebase from '@angular/fire/app';
import firebase from 'firebase/compat/app';
import { ModalConfirmDeleteComponent } from './components/modal/modal-confirm-delete/modal-confirm-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ModelsViewComponent,
    ModelEditorViewComponent,
    ModelCreatorViewComponent,
    ModalConfirmDeleteComponent,
    ErrorViewComponent,
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
    NgbModule,
  ],
  providers: [AuthService, AngularFireAuthGuard, BrandService, ModelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
