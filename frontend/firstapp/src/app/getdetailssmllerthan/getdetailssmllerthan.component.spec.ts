import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailssmllerthanComponent } from './getdetailssmllerthan.component';

describe('GetdetailssmllerthanComponent', () => {
  let component: GetdetailssmllerthanComponent;
  let fixture: ComponentFixture<GetdetailssmllerthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdetailssmllerthanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdetailssmllerthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
