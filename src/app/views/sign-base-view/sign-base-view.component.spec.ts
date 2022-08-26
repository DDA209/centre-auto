import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignBaseViewComponent } from './sign-base-view.component';

describe('SignBaseViewComponent', () => {
  let component: SignBaseViewComponent;
  let fixture: ComponentFixture<SignBaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignBaseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignBaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
