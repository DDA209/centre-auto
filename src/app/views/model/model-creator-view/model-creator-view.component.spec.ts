import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCreatorViewComponent } from './model-creator-view.component';

describe('ModelCreatorViewComponent', () => {
  let component: ModelCreatorViewComponent;
  let fixture: ComponentFixture<ModelCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCreatorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
