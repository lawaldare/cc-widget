import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as Payment from 'payment';


export function CVCValidators(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
			 
      const value = control.value;

      let trimmedValue = value.replace(/\s+/g, '');

			const error = Payment.fns.validateCardCVC(trimmedValue);

			return error ? null : { invalidCVC: true };

    };
}

// 5354 5679 7322 8132 - Valid master card number;
// 4659 0179 1138 0012 - Valid visa card number
