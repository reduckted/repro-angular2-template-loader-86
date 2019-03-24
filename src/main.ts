import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

console.log('require("app.component.css")');
console.log(require('./app.component.css'));

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(ex => console.error(ex));
