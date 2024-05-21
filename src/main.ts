import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Cqrs } from 'libs/mhn-store/src/lib/frontend';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((AppModule) => {
    Cqrs.setAppModule(AppModule);
  })
  .catch(err => console.error(err));
