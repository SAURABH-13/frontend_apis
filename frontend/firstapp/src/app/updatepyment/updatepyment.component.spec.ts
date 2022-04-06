import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepymentComponent } from './updatepyment.component';

describe('UpdatepymentComponent', () => {
  let component: UpdatepymentComponent;
  let fixture: ComponentFixture<UpdatepymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
