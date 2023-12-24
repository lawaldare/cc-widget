import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as Payment from 'payment';


export function ExpiryDateValidators(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
			 
      const value = control.value;

			const month = value.split('/')[0];
			const year = value.split('/')[1];

			const error = Payment.fns.validateCardExpiry(month, year);

			return error ? null : { invalidDate: true };

    };
}
