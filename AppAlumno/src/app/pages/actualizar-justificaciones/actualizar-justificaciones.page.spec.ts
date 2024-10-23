import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarJustificacionesPage } from './actualizar-justificaciones.page';

describe('ActualizarJustificacionesPage', () => {
  let component: ActualizarJustificacionesPage;
  let fixture: ComponentFixture<ActualizarJustificacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarJustificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
