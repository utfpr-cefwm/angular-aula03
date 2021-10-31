import { TestBed } from '@angular/core/testing';

import { ArtigoEdicaoService } from './artigo-edicao.service';

describe('ArtigoEdicaoService', () => {

  let service: ArtigoEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(ArtigoEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
