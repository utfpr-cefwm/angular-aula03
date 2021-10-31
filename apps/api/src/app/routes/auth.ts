import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  IUsuario,
} from '@artigaria/common';

import { getCollection } from "../util/mongodb";
import { checkString, sanitizeUsuario } from "../util/sanitization";
import { criarToken } from "../util/jwt";

export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  let body: Pick<IUsuario, 'login' | 'senha'>;

  try {
    body = {
      login: checkString(req.body.login),
      senha: checkString(req.body.senha),
    };
  } catch(err) {
    // `next()` COM parâmetro significa enviar para error handler.
    next(err);
  }

  const usuario = await getCollection<IUsuario>(
    req.app,
    'usuarios',
  ).findOne(body);

  if (usuario) {
    res.json({
      jwt: criarToken(usuario),
      usuario: sanitizeUsuario(usuario),
    });
  } else {
    res.status(401);
    next(new Error('Login ou senha errados'));
  }

});
