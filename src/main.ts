import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CCWidgetModule } from './app/cc-widget/cc-widget.module';


platformBrowserDynamic().bootstrapModule(CCWidgetModule)
  .catch(err => console.error(err));
