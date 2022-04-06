import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstatusdeliveryComponent } from './getstatusdelivery.component';

describe('GetstatusdeliveryComponent', () => {
  let component: GetstatusdeliveryComponent;
  let fixture: ComponentFixture<GetstatusdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstatusdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstatusdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
