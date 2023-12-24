import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CcWidgetComponent } from './cc-widget/cc-widget.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { CardNumberDirective } from './directives/card-number.directive';
import { ExpiryDateDirective } from './directives/expiry-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    CcWidgetComponent,
    CardNumberDirective,
    ExpiryDateDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define("cm-credit-card-widget", myElement);
  }
}