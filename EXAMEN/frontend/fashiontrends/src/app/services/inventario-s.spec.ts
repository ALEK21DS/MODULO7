import { TestBed } from '@angular/core/testing';

import { InventarioS } from './inventario-s';

describe('InventarioS', () => {
  let service: InventarioS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
