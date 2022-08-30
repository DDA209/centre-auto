import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditorViewComponent } from './model-editor-view.component';

describe('ModelEditorViewComponent', () => {
  let component: ModelEditorViewComponent;
  let fixture: ComponentFixture<ModelEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEditorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
