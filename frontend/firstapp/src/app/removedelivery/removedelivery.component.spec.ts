import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedeliveryComponent } from './removedelivery.component';

describe('RemovedeliveryComponent', () => {
  let component: RemovedeliveryComponent;
  let fixture: ComponentFixture<RemovedeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
