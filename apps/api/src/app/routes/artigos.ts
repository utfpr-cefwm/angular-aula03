import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  Artigo,
} from '@artigaria/common';

import { getCollection } from "../util/mongodb";

export const artigosRouter = Router();

artigosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const artigos = await getCollection<Artigo>(
    req.app,
    'artigos',
  ).find().toArray();
  res.json(artigos);
});
