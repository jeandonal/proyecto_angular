import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaAErroresComponent } from './ayuda-a-errores.component';

describe('AyudaAErroresComponent', () => {
  let component: AyudaAErroresComponent;
  let fixture: ComponentFixture<AyudaAErroresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaAErroresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaAErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
