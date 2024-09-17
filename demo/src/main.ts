import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  // eslint-disable-next-line no-implicit-any-function-args/no-implicit-any-function-args
  .catch(err => console.error(err));
