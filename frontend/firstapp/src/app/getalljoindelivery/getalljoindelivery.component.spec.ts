import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalljoindeliveryComponent } from './getalljoindelivery.component';

describe('GetalljoindeliveryComponent', () => {
  let component: GetalljoindeliveryComponent;
  let fixture: ComponentFixture<GetalljoindeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalljoindeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalljoindeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
