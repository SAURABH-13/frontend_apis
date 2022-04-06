import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailsgreaterthanComponent } from './getdetailsgreaterthan.component';

describe('GetdetailsgreaterthanComponent', () => {
  let component: GetdetailsgreaterthanComponent;
  let fixture: ComponentFixture<GetdetailsgreaterthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdetailsgreaterthanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdetailsgreaterthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
