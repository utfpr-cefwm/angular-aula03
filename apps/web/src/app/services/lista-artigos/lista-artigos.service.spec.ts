import { TestBed } from '@angular/core/testing';

import { ListaArtigosService } from './lista-artigos.service';

describe('ListaArtigosService', () => {
  let service: ListaArtigosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaArtigosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
