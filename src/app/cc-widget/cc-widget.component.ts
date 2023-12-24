import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardNameValidators } from '../validators/card-name-validator';
import { ExpiryDateValidators } from '../validators/expiry-date-validator';

@Component({
  selector: 'cm-cc-widget',
  templateUrl: './cc-widget.component.html',
  styleUrls: ['./cc-widget.component.scss']
})
export class CcWidgetComponent {

  creditCardForm = new FormGroup({
    cardHolder: new FormControl('', [Validators.required, CardNameValidators()]),
    cardNumber: new FormControl('', Validators.required),
    expiryDate: new FormControl('', [Validators.required, ExpiryDateValidators()]),
    cvc: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.creditCardForm.value);
    
  }

}
