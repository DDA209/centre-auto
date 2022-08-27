import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReplaySubject } from 'rxjs';
import { Brand } from 'src/app/models/brand-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brands!: ReplaySubject<Array<Brand>>;

  constructor(private afs: AngularFirestore) {
    this.brands = new ReplaySubject<Array<Brand>>();
  }

  getAll() {
    this.afs
      .collection('brands')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const brand = action.payload.doc.data() as Brand;
            brand.id = action.payload.doc.id;
            return brand;
          });
        })
      )
      .subscribe((brands: Array<Brand>): void => {
        this.brands.next(brands);
      });
  }

  getById() {}

  add(brand: Brand): Promise<any> {
    return new Promise((res, rej) => {
      this.afs
        .collection('brands')
        .add(brand.toPlainObj())
        .then(() => res('Success'))
        .catch((err) => rej(err));
    });
  }

  edit() {}

  delete() {}
}
