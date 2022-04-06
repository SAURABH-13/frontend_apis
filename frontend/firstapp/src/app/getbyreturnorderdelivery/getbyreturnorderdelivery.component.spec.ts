import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyreturnorderdeliveryComponent } from './getbyreturnorderdelivery.component';

describe('GetbyreturnorderdeliveryComponent', () => {
  let component: GetbyreturnorderdeliveryComponent;
  let fixture: ComponentFixture<GetbyreturnorderdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyreturnorderdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyreturnorderdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
