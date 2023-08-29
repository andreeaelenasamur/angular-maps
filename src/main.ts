import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZWxlbmExOSIsImEiOiJjbGxrcGV1MmwwM244M2Rxc21iM2Q2cGw4In0.VejoOBF15sABEKmLSE7sHQ';


if ( !navigator.geolocation ){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
