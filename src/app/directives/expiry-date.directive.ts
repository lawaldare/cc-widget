import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ExpiryDate]'
})
export class ExpiryDateDirective {

  constructor(private element: ElementRef) { 
  }

  @HostListener('input', ['$event']) 
    onTyping(event:KeyboardEvent) {
      const input = event.target as HTMLInputElement;

      let trimmed = input.value.replace(/\s+/g, '');
      trimmed = trimmed.replace(/\/+/g, '');

      if(Number(trimmed[0]) > 1){
        trimmed = '0' + trimmed;
      }
      
      if(trimmed.length > 6){
        trimmed = trimmed.substring(0, 6);  
      }

      let numbers = [];
      let finalOutput = [];
      for(let i = 0; i < trimmed.length; i += 2){
        numbers.push(trimmed.substring(i, i+2));
      }

      if(numbers.length > 2){
        finalOutput.push(numbers[0]);
        finalOutput.push(numbers[1] + numbers[2]);
      } else {
        finalOutput = numbers
      }
      
      input.value = finalOutput.join('/');
    }

}
