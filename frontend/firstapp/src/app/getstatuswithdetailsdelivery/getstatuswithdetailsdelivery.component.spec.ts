import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstatuswithdetailsdeliveryComponent } from './getstatuswithdetailsdelivery.component';

describe('GetstatuswithdetailsdeliveryComponent', () => {
  let component: GetstatuswithdetailsdeliveryComponent;
  let fixture: ComponentFixture<GetstatuswithdetailsdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstatuswithdetailsdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstatuswithdetailsdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
