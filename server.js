const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
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
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
});