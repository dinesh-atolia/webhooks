import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use.(bodyParser.urlEncoded());


export function init() {
  return app;
}
