import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-base-view',
  templateUrl: './sign-base-view.component.html',
  styleUrls: ['./sign-base-view.component.scss'],
})
export class SignBaseViewComponent implements OnInit {
  title!: string;
  signType!: string;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.title = 'Connexion';
    this.getPath();
    console.log(' this.title >>>', this.title);
  }

  getPath(): void {
    const path: string = this.location.prepareExternalUrl(
      this.location.path().slice(1)
    );
    console.log(' path >>>', path);
    if (path === '#/signup') {
      this.title = 'Connexion';
      this.signType = 'signup';
    } else {
      this.title = 'Inscription';
      this.signType = 'signin';
    }
  }
}
