import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleJustificacionesPage } from './detalle-justificaciones.page';

describe('DetalleJustificacionesPage', () => {
  let component: DetalleJustificacionesPage;
  let fixture: ComponentFixture<DetalleJustificacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJustificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
