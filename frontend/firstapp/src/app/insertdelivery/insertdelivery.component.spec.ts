import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdeliveryComponent } from './insertdelivery.component';

describe('InsertdeliveryComponent', () => {
  let component: InsertdeliveryComponent;
  let fixture: ComponentFixture<InsertdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
