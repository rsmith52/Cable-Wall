import { Pipe, PipeTransform } from '@angular/core';
import { IEndSelection } from '../cables/end';

@Pipe ({
  name: "endQuantity"
})

export class EndQuantityPipe implements PipeTransform {
  transform(value: string, endSelection: IEndSelection): string {
    if (endSelection.quantity > 1) {
      return value + " (x" + endSelection.quantity + ")";
    }
    else return value;
  }
}
