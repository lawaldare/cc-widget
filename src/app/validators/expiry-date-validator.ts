import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ExpiryDateValidators(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
			 
      const value = control.value;

			 if (!value) {
        return null;
      }
			const month = value.split('/')[0];
			const year = value.split('/')[1];

			const currentMonth = new Date().getMonth() + 1;
			const currentYear = new Date().getFullYear();

			if(!year){
				return null;
			}

			if(year.length < 4){
				return { invalidDate: true }
			}


			if(Number(year) < currentYear){
				return { invalidDate: true }
			}


			if(Number(month) < currentMonth && Number(year) === currentYear){
				return { invalidDate: true }
			} 
			return null

    };
}
