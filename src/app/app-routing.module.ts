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

const redirectLoggedInToDashboard = (): any =>
  redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = (): any =>
  redirectUnauthorizedTo(['signin']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  {
    path: 'signin',
    component: SignBaseViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'signup',
    component: SignBaseViewComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGardPipe: redirectUnauthorizedToLogin },
  },
  { path: 'brands', component: BrandsViewComponent },
  { path: 'brand/new', component: BrandCreatorViewComponent },
  { path: 'brand/edit/:id', component: BrandEditorViewComponent },
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
