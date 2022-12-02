import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSegundaEntregaComponent } from './app-segunda-entrega.component';

describe('AppSegundaEntregaComponent', () => {
  let component: AppSegundaEntregaComponent;
  let fixture: ComponentFixture<AppSegundaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSegundaEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSegundaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
