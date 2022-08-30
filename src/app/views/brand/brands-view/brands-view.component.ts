import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  erroMsg!: string;
  alert: any;

  constructor(
    private brandService: BrandService,
    private modalService: NgbModal
  ) {
    this.alert = {
      isVisible: false,
      type: 'info',
      message: 'Marques enregisrées',
    };
  }

  ngOnInit(): void {
    this.brandSub = this.brandService.brands.subscribe(
      (brands: Array<Brand>) => (this.brands = brands)
    );

    this.brandService.getAll();
  }

  OnClickDeleteBrand(brandId: string) {
    const confirmModal = this.modalService.open(
      ModalConfirmDeleteComponent
    ).result;

    confirmModal.then(() => {
      this.brandService
        .delete(brandId)
        .then(() => {
          this.alert = {
            isVisible: true,
            type: 'success',
            message: 'Suppression réalisée',
          };
          console.log(' this.alert >>>', this.alert);
          setTimeout(() => {
            this.alert.isVisible = false;
          }, 2500);
        })
        .catch((err) => {
          console.log('Not OK suppr error >>>', err);
          this.alert = {
            isVisible: true,
            type: err ? 'danger' : 'success',
            message: err
              ? 'Une erreur est survenue: ' + err
              : 'suppression sans erreur',
          };
          console.log(' this.alert >>>', this.alert);

          setTimeout(() => {
            this.alert.isVisible = false;
          }, 2500);
        });
    });
  }

  ngOnDestroy(): void {
    this.brandSub.unsubscribe();
  }
}
