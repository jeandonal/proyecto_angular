import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInterpolacionComponent } from './app-interpolacion.component';

describe('AppInterpolacionComponent', () => {
  let component: AppInterpolacionComponent;
  let fixture: ComponentFixture<AppInterpolacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInterpolacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInterpolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
