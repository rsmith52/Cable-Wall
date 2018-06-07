import { Pipe, PipeTransform } from '@angular/core';
import { IEnd } from '../cables/end';

@Pipe ({
  name: "endListDisplay"
})

export class EndListDisplayPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
