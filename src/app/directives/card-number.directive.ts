import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CardNumber]'
})
export class CardNumberDirective {

  constructor(private element: ElementRef) { 
  }

  @HostListener('input', ['$event']) 
    onTyping(event:KeyboardEvent) {
      const input = event.target as HTMLInputElement;
     
      let trimmed = input.value.replace(/\s+/g, '');
      
      if(trimmed.length > 16){
        trimmed = trimmed.substring(0, 16);  
      }
      input.value = trimmed;

      let numbers = [];
      for(let i = 0; i < trimmed.length; i += 4){
        numbers.push(trimmed.substring(i, i+4));
      }
      
      input.value = numbers.join(' ');
    }

}
