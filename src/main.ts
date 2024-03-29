import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
