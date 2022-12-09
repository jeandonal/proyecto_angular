import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraEntregaComponent } from './tercera-entrega.component';

describe('TerceraEntregaComponent', () => {
  let component: TerceraEntregaComponent;
  let fixture: ComponentFixture<TerceraEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceraEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceraEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
