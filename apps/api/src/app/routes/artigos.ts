import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  IArtigo,
} from '@artigaria/common';

import { getCollection } from "../util/mongodb";

export const artigosRouter = Router();

artigosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const artigos = await getCollection<IArtigo>(
    req.app,
    'artigos',
  ).find().toArray();
  res.json(artigos);
});

artigosRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const artigo = await getCollection<IArtigo>(
    req.app,
    'artigos',
  ).findOne({
    _id: _id,
  });
  res.json(artigo);
});
