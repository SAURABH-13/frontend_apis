import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertpaymentdetailsComponent } from './insertpaymentdetails.component';

describe('InsertpaymentdetailsComponent', () => {
  let component: InsertpaymentdetailsComponent;
  let fixture: ComponentFixture<InsertpaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertpaymentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
