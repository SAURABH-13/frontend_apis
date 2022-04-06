import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldeliveryComponent } from './getalldelivery.component';

describe('GetalldeliveryComponent', () => {
  let component: GetalldeliveryComponent;
  let fixture: ComponentFixture<GetalldeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalldeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalldeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
