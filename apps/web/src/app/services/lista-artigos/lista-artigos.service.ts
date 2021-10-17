import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

import {
  Artigo,
  IArtigo,
} from '@artigaria/common';

@Injectable({
  providedIn: 'root',
})
export class ListaArtigosService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getAll(): Observable<Artigo[]> {
    return this.httpClient.get<IArtigo[]>(`http://localhost:3333/api/artigos`).pipe(
      map((iArtigos: IArtigo[]) => {
        return iArtigos.map((iArtigo: IArtigo) => new Artigo(
          iArtigo._id,
          iArtigo.imagem,
          iArtigo.titulo,
          iArtigo.descricao,
          iArtigo.url,
        ));
      }),
    );
  }

}
