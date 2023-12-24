import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardNameValidators } from '../validators/card-name-validator';
import { ExpiryDateValidators } from '../validators/expiry-date-validator';
import { CreditCardValidators } from '../validators/credit-card-validator';
import { CVCValidators } from '../validators/cvc-validator';

@Component({
  selector: 'cm-cc-widget',
  templateUrl: './cc-widget.component.html',
  styleUrls: ['./cc-widget.component.scss']
})
export class CcWidgetComponent {

  creditCardForm = new FormGroup({
    cardHolder: new FormControl('', [CardNameValidators()]),
    cardNumber: new FormControl('', [CreditCardValidators()]),
    expiryDate: new FormControl('', [ExpiryDateValidators()]),
    cvc: new FormControl('', [CVCValidators()])
  })

  onSubmit(){
    console.log(this.creditCardForm.value);
    
  }

}
