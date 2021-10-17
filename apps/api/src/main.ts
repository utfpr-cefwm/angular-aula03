/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

MongoClient.connect(
  'mongodb://angular-aula03_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('artigaria');
  console.log('Conectado ao MongoDB.');
});

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
