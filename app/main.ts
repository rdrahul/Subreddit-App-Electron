import "materialize-css";
import "angular2-materialize";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
const electron = require('electron');
platform.bootstrapModule(AppModule);