import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SignBaseViewComponent } from './views/sign-base-view/sign-base-view.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { BrandsViewComponent } from './views/brand/brands-view/brands-view.component';
import { BrandEditorViewComponent } from './views/brand/brand-editor-view/brand-editor-view.component';
import { BrandCreatorViewComponent } from './views/brand/brand-creator-view/brand-creator-view.component';
import { ModelsViewComponent } from './views/model/models-view/models-view.component';
import { ModelEditorViewComponent } from './views/model/model-editor-view/model-editor-view.component';
import { ModelCreatorViewComponent } from './views/model/model-creator-view/model-creator-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const redirectLoggedInToDashboard = (): any =>
  redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = (): any =>
  redirectUnauthorizedTo(['signin']);

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'signin',
    component: SignBaseViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'signup',
    component: SignBaseViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'brands',
    component: BrandsViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'brand/new',
    component: BrandCreatorViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'brand/edit/:id',
    component: BrandEditorViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'models',
    component: ModelsViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'model/new',
    component: ModelCreatorViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'model/edit/:id',
    component: ModelEditorViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: 'error', component: ErrorViewComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
