import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisJustificacionesPage } from './mis-justificaciones.page';

describe('MisJustificacionesPage', () => {
  let component: MisJustificacionesPage;
  let fixture: ComponentFixture<MisJustificacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisJustificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
