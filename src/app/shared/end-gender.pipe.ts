import { Pipe, PipeTransform } from '@angular/core';
import { IEnd } from '../cables/end';

@Pipe ({
  name: "endGender"
})

export class EndGenderPipe implements PipeTransform {
  transform(value: string, end: IEnd): string {
    if (end.male == true) {
      return value + " (M)";
    }
    else return value + " (F)";
  }
}
