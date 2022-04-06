import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailsbyidComponent } from './getdetailsbyid.component';

describe('GetdetailsbyidComponent', () => {
  let component: GetdetailsbyidComponent;
  let fixture: ComponentFixture<GetdetailsbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdetailsbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdetailsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
