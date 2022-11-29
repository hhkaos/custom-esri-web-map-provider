# Custom web map provider

This is a simple demo project that shows how to fake the "<a href="https://developers.arcgis.com/documentation/mapping-apis-and-services/content-management/items/#get-an-item">get item</a>" and "<a href="https://developers.arcgis.com/documentation/mapping-apis-and-services/content-management/items/#get-item-data">get item data</a>" endpoints from the ArcGIS Portal API to 
allow you to serve your the <a href="https://developers.arcgis.com/web-map-specification/"> ArcGIS web map JSON object spec</a> from your own Node server.

![Screenshot](./screenshot.png)

## Install

1. Run: `npm install`.
2. Create your own open ssl certificate: `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
3. Run: `npm run start`

## Questions/contributions

Please feel free to use the issues.