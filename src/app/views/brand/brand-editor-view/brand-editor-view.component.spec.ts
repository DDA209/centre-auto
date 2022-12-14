import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandEditorViewComponent } from './brand-editor-view.component';

describe('BrandEditorViewComponent', () => {
  let component: BrandEditorViewComponent;
  let fixture: ComponentFixture<BrandEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandEditorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
