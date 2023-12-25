import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CcWidgetComponent } from './cc-widget.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { CardNumberDirective } from '../directives/card-number.directive';
import { ExpiryDateDirective } from '../directives/expiry-date.directive';

@NgModule({
  declarations: [
    CcWidgetComponent,
    CardNumberDirective,
    ExpiryDateDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CcWidgetComponent],
})
export class CCWidgetModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(CcWidgetComponent, { injector });
    customElements.define("cm-credit-card-widget", myElement);
  }
}