import { request, ApplicationCredentialsManager } from "@esri/arcgis-rest-request";
import { clientId, clientSecret } from './auth-credentials.js'
import * as fs from 'fs';

const session = ApplicationCredentialsManager.fromCredentials({
  clientId,
  clientSecret
});

const webmapId = 'afbb770f9d65402d9f1b053afabc4413'
const webmapUrl =
  `https://www.arcgis.com/sharing/rest/content/items/${webmapId}`;

  
// Download item info
request(`${webmapUrl}`, { authentication: session} ).then((response) => {
  const content = JSON.stringify(response);
  fs.writeFile(`./src/public/${webmapId}.json`, content, err => {
    if (err) { console.error(err); } 
    else {
      console.log(`${webmapId} item info downloaded`)
    }
  });
});

request(`${webmapUrl}/data`, { authentication: session} ).then((response) => {
  const content = JSON.stringify(response);
  fs.writeFile(`./src/public/data/${webmapId}.json`, content, err => {
    if (err) { console.error(err); } 
    else {
      console.log(`${webmapId} downloaded`)
    }
  });
});