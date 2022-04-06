import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovepaymentComponent } from './removepayment.component';

describe('RemovepaymentComponent', () => {
  let component: RemovepaymentComponent;
  let fixture: ComponentFixture<RemovepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
