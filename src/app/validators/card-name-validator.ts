import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CardNameValidators(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
			 
      const value = control.value;

      if (!value) {
        return null;
      }

			const regex = new RegExp('^[a-zA-Z]+ [a-zA-Z]+$');

      return regex.test(value) ? null : { invalid: true };

    };
}
