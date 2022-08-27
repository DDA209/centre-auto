import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalConfirmDeleteComponent } from 'src/app/components/modal/modal-confirm-delete/modal-confirm-delete.component';
import { Brand } from 'src/app/models/brand-model';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brands-view',
  templateUrl: './brands-view.component.html',
  styleUrls: ['./brands-view.component.scss'],
})
export class BrandsViewComponent implements OnInit, OnDestroy {
  brands!: Array<Brand>;
  brandSub!: Subscription;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandSub = this.brandService.brands.subscribe(
      (brands: Array<Brand>) => (this.brands = brands)
    );

    this.brandService.getAll();
  }

  OnClickDeleteBrand(brandId: string) {}

  ngOnDestroy(): void {
    this.brandSub.unsubscribe();
  }
}
