/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

import * as cors from 'cors';

import { artigosRouter } from './app/routes/artigos';

MongoClient.connect(
  'mongodb://angular-aula03_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('artigaria');
  console.log('Conectado ao MongoDB.');
}).catch(err => {
  console.error(err);
});

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/artigos', artigosRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
