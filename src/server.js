import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const express = require('express');
const app = express();

app.use(cors({origin: '*'}));
app.use(express.static('public'));

const port = 3000

app.get('/sharing/rest/content/items/:itemId', (req, res) => {
  res.sendFile(`public/${req.params.itemId}.json`, { root: __dirname });
});

app.get('/sharing/rest/content/items/:itemId/data', (req, res) => {
  res.sendFile(`public/data/${req.params.itemId}.json`, { root: __dirname });
})

app.get('/sharing/rest/portals/self', (req, res) => {
  res.sendFile('public/self.json', { root: __dirname });
});
  
https.createServer({
  key: fs.readFileSync('./src/server.key'),
  cert: fs.readFileSync('./src/server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
});