import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import {enviroment} from ''

// if(envi)


if(!navigator.geolocation){
  alert("El navegador no  soporta la geolocalizacion")
  throw new Error("El navegador no  soporta la geolocalizacion")
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
