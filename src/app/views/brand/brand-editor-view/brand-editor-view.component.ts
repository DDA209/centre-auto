import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Brand } from 'src/app/models/brand-model';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand-editor-view',
  templateUrl: './brand-editor-view.component.html',
  styleUrls: ['./brand-editor-view.component.scss'],
})
export class BrandEditorViewComponent implements OnInit {
  editBrandForm!: FormGroup;
  errorMsg!: string;
  brand!: Brand;

  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.brand = new Brand('');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.brandService.getById(id).then((brand: Brand) => {
      this.brand = brand;
    });
    this._initForm();
  }

  _initForm() {
    this.editBrandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmitEditBrandForm(): void {
    this.errorMsg = '';
    this.brandService
      .edit(this.brand)
      .then(() => {
        this.router.navigate(['brands']);
      })
      .catch((errMsg) => (this.errorMsg = errMsg));
  }
}
