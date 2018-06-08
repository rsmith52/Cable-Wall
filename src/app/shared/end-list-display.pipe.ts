import { Pipe, PipeTransform } from '@angular/core';
import { IEnd } from '../cables/end';

@Pipe ({
  name: "endListDisplay"
})

export class EndListDisplayPipe implements PipeTransform {
  transform(value: string, character: string): string {
    while (value.indexOf(character) != -1) {
      value = value.replace(character, ' ');
    }
    return value;
  }
}
