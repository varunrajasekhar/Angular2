import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/components/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);