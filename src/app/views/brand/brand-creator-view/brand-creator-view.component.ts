import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand-model';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand-creator-view',
  templateUrl: './brand-creator-view.component.html',
  styleUrls: ['./brand-creator-view.component.scss'],
})
export class BrandCreatorViewComponent implements OnInit {
  newBrandForm!: FormGroup;
  errorMsg!: string;
  brand!: Brand;

  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.brand = new Brand('');
  }

  ngOnInit(): void {
    this._initForm();
  }

  _initForm() {
    this.newBrandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmitBrandForm(): void {
    this.errorMsg = '';
    this.brandService
      .add(this.brand)
      .then(() => {
        this.router.navigate(['brands']);
      })
      .catch((errMsg) => {
        this.errorMsg = errMsg;
      });
  }
}
