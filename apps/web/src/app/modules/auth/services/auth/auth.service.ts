import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  AuthResult,
  IUsuario,
} from '@artigaria/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public login(iUsuario: Pick<IUsuario, 'login' | 'senha'>): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      `${this.apiBaseUrl}/auth/login`,
      iUsuario,
    );
  }

}
