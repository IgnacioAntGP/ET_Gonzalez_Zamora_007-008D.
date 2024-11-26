import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarPage } from './cerrar.page';

describe('CerrarPage', () => {
  let component: CerrarPage;
  let fixture: ComponentFixture<CerrarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
