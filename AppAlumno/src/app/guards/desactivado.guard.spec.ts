import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { desactivadoGuard } from './desactivado.guard';

describe('desactivadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => desactivadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
