import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Artigo,
  IArtigo,
} from '@artigaria/common';

@Injectable({
  providedIn: 'root',
})
export class ArtigoEdicaoService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Recupera do banco de dados o artigo especificado.
   *
   * @param id Identificador único do artigo a ser recuperado.
   */
  public get(id: number): Observable<Artigo> {
    return this.httpClient.get<IArtigo>(`${this.apiBaseUrl}/artigos/${id}`).pipe(
      map((iArtigo: IArtigo) => {
        return Artigo.fromJson(iArtigo);
      }),
    );
  }

}
