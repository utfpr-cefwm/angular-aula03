import * as jsonWebToken from 'jsonwebtoken';

import { IUsuario } from "@artigaria/common";

import { sanitizeUsuario } from './sanitization';

export const JWT_SECRET_KEY = 'Ch4v3-s3CReTa';

/**
 * Emite um novo token JWT para o usuário especificado, com duração de 10 min.
 *
 * @param iUsuario Dados do usuário para o qual o token está sendo emitido.
 */
export function criarToken(iUsuario: IUsuario): string {
  return jsonWebToken.sign(
    sanitizeUsuario(iUsuario),
    JWT_SECRET_KEY,
    {
      expiresIn: '10m',
    },
  );
}
