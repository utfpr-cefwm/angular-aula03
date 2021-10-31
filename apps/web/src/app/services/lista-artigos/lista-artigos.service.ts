import { Inject, Injectable } from '@angular/core';
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
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public getAll(): Observable<Artigo[]> {
    return this.httpClient.get<IArtigo[]>(`${this.apiBaseUrl}/artigos`).pipe(
      map((iArtigos: IArtigo[]) => {
        return iArtigos.map((iArtigo: IArtigo) => Artigo.fromJson(iArtigo));
      }),
    );
  }

}
